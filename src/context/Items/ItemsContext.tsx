import React, { createContext, useEffect, useState } from "react";
import {
    createItemsRequest,
    deleteItemRequest,
    getItemsRequest,
    updateItemRequest,
} from "../../api/items.tsx"; 

import { CreateItem, Items, UpdateItem } from "../../interfaces/checklist.interface"; 

interface ItemContextValue {
    items: Items[];
    isLoadingItems: boolean;
    createItem: (checklistId: string, item: CreateItem) => Promise<void>; 
    deleteItem: (checklistId: string, itemId: string) => Promise<void>; 
    updateItem: (checklistId: string, itemId: string, item: UpdateItem) => Promise<void>; 
}

export const ItemContext = createContext<ItemContextValue>({
    items: [],
    isLoadingItems: false,
    createItem: async () => {},
    deleteItem: async () => {},
    updateItem: async () => {},
});

interface Props {
    children: React.ReactNode;
}

export const ItemProvider: React.FC<Props> = ({ children }) => {
    const [items, setItems] = useState<Items[]>([]); 
    const [isLoadingItems, setIsLoadingItems] = useState<boolean>(false);

    useEffect(() => {
        setIsLoadingItems(true); 
        getItemsRequest("checklistId")
            .then((response) => response.json())
            .then((data) => {
                setItems(data);
                setIsLoadingItems(false); 
            })
            .catch((error) => {
                console.error("Error loading items:", error);
                setIsLoadingItems(false); 
            });
    }, []);

    const createItem = async (checklistId: string, item: CreateItem) => { 
        const response = await createItemsRequest(checklistId, item); 
        const data = await response.json();
        setItems([...items, data]);
    };

    const deleteItem = async (checklistId: string, id: string) => { 
        const response = await deleteItemRequest(checklistId, id); 
        if (response.ok) {
            setItems(items.filter((item) => item.id !== id));
        }
    };

    const updateItem = async (checklistId: string, id: string, item: UpdateItem) => {
        const response = await updateItemRequest(checklistId, id, item);
        const data = await response.json();
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, ...data } : item,
            ),
        );
    };

    return (
        <ItemContext.Provider
            value={{
                items,
                isLoadingItems,
                createItem,
                deleteItem,
                updateItem,
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};
