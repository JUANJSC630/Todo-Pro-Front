import { useContext } from "react";
import { ChecklistContext } from "./ChecklistContext";

export const useChecklists = () => {
    const context = useContext(ChecklistContext);
    if (!context) {
        throw new Error("useTasks must be used within a ChecklistProvider");
    }
    return context;
};
