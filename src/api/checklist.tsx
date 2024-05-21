import { CreateChecklist, UpdateChecklist } from "../interfaces/checklist.interface";

const Api = import.meta.env.VITE_API_URL;

console.log(Api);

export const createChecklistsRequest = (checklist: CreateChecklist) => {
    return fetch(`${Api}/checklists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(checklist),
    });
    // console.log(process.env.API_URL)
};

export const getChecklistsRequest = () => {
    return fetch(`${Api}/checklists`);
};

export const deleteChecklistsRequest = (id: string) => {
    return fetch(`${Api}/checklists/${id}`, {
        method: "DELETE",
    });
};

export const updateChecklistsRequest = (id: string, checklist: UpdateChecklist) => {
    return fetch(`${Api}/checklists/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(checklist),
    });
};
