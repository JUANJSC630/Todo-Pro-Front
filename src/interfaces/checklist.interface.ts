export interface Checklist {
    id: string;
    titulo: string;
    items: Items[];
    createdAt: string;
}

export interface Items {
    id: string;
    checked: boolean;
    description: string;
    value?: number;
    checklistId: string;
}

export type CreateChecklist = Omit<Checklist, "id" | "createdAt" | "updatedAt">;

export type UpdateChecklist = Partial<Checklist>;

export type CreateItem = Omit<Items, "id" | "checklistId">;

export type UpdateItem = Partial<Items>;
