export interface Task {
    id: string;
    title: string;
    description?: string;
    done?: boolean;
    priority?: string;
}

export type CreateTask = Omit<Task, "createdAt" | "updatedAt">;

export type UpdateTask = Partial<CreateTask>;
