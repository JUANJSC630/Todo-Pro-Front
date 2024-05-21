import { CreateItem, UpdateItem } from "../interfaces/checklist.interface";

const Api = import.meta.env.VITE_API_URL;

console.log(Api);

export const createItemsRequest = (checklistId: string, item: CreateItem) => {
    return fetch(`${Api}/checklists/${checklistId}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
};

export const getItemsRequest = (checklistId: string) => {
    return fetch(`${Api}/checklists/${checklistId}/items`);
};

export const deleteItemRequest = (checklistId: string, id: string) => {
    return fetch(`${Api}/checklists/${checklistId}/items/${id}`, {
        method: "DELETE",
    });
};

export const updateItemRequest = (
    checklistId: string,
    id: string,
    item: UpdateItem,
) => {
    return fetch(`${Api}/checklists/${checklistId}/items/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    });
};
