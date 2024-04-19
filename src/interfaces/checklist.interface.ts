export interface Checklist {
    id: string;
    titulo: string;
    items: Items[];
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
