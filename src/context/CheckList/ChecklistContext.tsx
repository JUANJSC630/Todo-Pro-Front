import React, { createContext, useEffect, useState } from "react";
import {
    createChecklistsRequest,
    deleteChecklistsRequest,
    getChecklistsRequest,
    updateChecklistsRequest,
} from "../../api/checklist.tsx";
import { CreateChecklist, Checklist, UpdateChecklist } from "../../interfaces/checklist.interface.ts";

interface ChecklistContextValue {
    checklists: Checklist[];
    isLoading: boolean; // Nuevo estado de carga
    createChecklist: (checklist: CreateChecklist) => Promise<void>;
    deleteChecklist: (id: string) => Promise<void>;
    updateChecklist: (id: string, checklist: UpdateChecklist) => Promise<void>;
}

export const ChecklistContext = createContext<ChecklistContextValue>({
    checklists: [],
    isLoading: false, // Valor predeterminado de isLoading es false
    createChecklist: async () => {},
    deleteChecklist: async () => {},
    updateChecklist: async () => {},
});

interface Props {
    children: React.ReactNode;
}

export const ChecklistProvider: React.FC<Props> = ({ children }) => {
    const [checklists, setChecklists] = useState<Checklist[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        setIsLoading(true); // Establecer isLoading en true al iniciar la carga de tareas
        getChecklistsRequest()
            .then((response) => response.json())
            .then((data) => {
                setChecklists(data);
                setIsLoading(false); // Establecer isLoading en false una vez que se han cargado las tareas
            })
            .catch((error) => {
                console.error("Error loading checklists:", error);
                setIsLoading(false); // Establecer isLoading en false si ocurre un error al cargar las tareas
            });
    }, []);

    const createChecklist = async (checklist: CreateChecklist) => {
        const response = await createChecklistsRequest(checklist);
        const data = await response.json();
        setChecklists([...checklists, data]);
    };

    const deleteChecklist = async (id: string) => {
        const response = await deleteChecklistsRequest(id);
        if (response.ok) {
            setChecklists(checklists.filter((checklist) => checklist.id !== id));
        }
    };

    const updateChecklist = async (id: string, checklist: UpdateChecklist) => {
        const response = await updateChecklistsRequest(id, checklist);
        const data = await response.json();
        setChecklists(
            checklists.map((checklist) =>
            checklist.id === id ? { ...checklist, ...data } : checklist,
            ),
        );
    };

    return (
        <ChecklistContext.Provider
            value={{
                checklists,
                isLoading,
                createChecklist,
                deleteChecklist,
                updateChecklist,
            }}
        >
            {children}
        </ChecklistContext.Provider>
    );
};
