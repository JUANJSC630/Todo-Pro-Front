import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const Api = import.meta.env.VITE_API_URL;

console.log(Api);

export const createTaskRequest = (task: CreateTask) => {
    return fetch(`${Api}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    // console.log(process.env.API_URL)
};

export const getTasksRequest = () => {
    return fetch(`${Api}/tasks`);
};

export const deleteTaskRequest = (id: string) => {
    return fetch(`${Api}/tasks/${id}`, {
        method: "DELETE",
    });
};

export const updateTaskRequest = (id: string, task: UpdateTask) => {
    return fetch(`${Api}/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
};
