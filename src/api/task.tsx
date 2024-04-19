import { CreateTask, UpdateTask } from "../interfaces/task.interface";

// const Api = "https://todo-pro-backend.onrender.com/api";
const Api = "http://localhost:3000/api";

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
