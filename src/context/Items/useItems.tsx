import { useContext } from "react";
import { ItemContext } from "./ItemsContext";

export const useItems = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error("useItems must be used within an ItemProvider");
    }
    return context;
};
