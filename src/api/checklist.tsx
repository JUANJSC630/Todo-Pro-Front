import { CreateChecklist, UpdateChecklist } from "../interfaces/checklist.interface";

// const Api = "https://todo-pro-backend.onrender.com/api";
const Api = "http://localhost:3000/api";

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
