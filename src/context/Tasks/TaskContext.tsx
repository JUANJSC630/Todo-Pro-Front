import React, { createContext, useEffect, useState } from "react";
import {
    createTaskRequest,
    deleteTaskRequest,
    getTasksRequest,
    updateTaskRequest,
} from "../../api/task.tsx";
import { CreateTask, Task, UpdateTask } from "../../interfaces/task.interface.ts";

interface TaskContextValue {
    tasks: Task[];
    isLoading: boolean; // Nuevo estado de carga
    createTask: (task: CreateTask) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    updateTask: (id: string, task: UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextValue>({
    tasks: [],
    isLoading: false, // Valor predeterminado de isLoading es false
    createTask: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {},
});

interface Props {
    children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false); // Estado de carga

    useEffect(() => {
        setIsLoading(true); // Establecer isLoading en true al iniciar la carga de tareas
        getTasksRequest()
            .then((response) => response.json())
            .then((data) => {
                setTasks(data);
                setIsLoading(false); // Establecer isLoading en false una vez que se han cargado las tareas
            })
            .catch((error) => {
                console.error("Error loading tasks:", error);
                setIsLoading(false); // Establecer isLoading en false si ocurre un error al cargar las tareas
            });
    }, []);

    const createTask = async (task: CreateTask) => {
        const response = await createTaskRequest(task);
        const data = await response.json();
        setTasks([...tasks, data]);
    };

    const deleteTask = async (id: string) => {
        const response = await deleteTaskRequest(id);
        if (response.ok) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    const updateTask = async (id: string, task: UpdateTask) => {
        const response = await updateTaskRequest(id, task);
        const data = await response.json();
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, ...data } : task,
            ),
        );
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                isLoading,
                createTask,
                deleteTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
