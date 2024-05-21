import { useEffect, useState } from "react";
import CheckListItem from "../CheckListItem.tsx";
import { useChecklists } from "../../context/CheckList/useChecklists.tsx";
import Spinner from "../Spinner.tsx";
import { Checklist, Items } from "../../interfaces/checklist.interface.ts";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useItems } from "../../context/Items/useItems.tsx";
import { getItemsRequest, updateItemRequest } from "../../api/items.tsx";

function CheckList() {
    const { checklists, isLoading } = useChecklists();
    const { isLoadingItems } = useItems();
    const [selectedChecklist, setSelectedChecklist] =
        useState<Checklist | null>(null);
    const [loadingMessage, setLoadingMessage] = useState(
        "Loading checklists...",
    );
    const [items, setItems] = useState<Items[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoading) {
                setLoadingMessage("Still loading checklists...");
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [isLoading]);

    const handleSelectChecklist = async (checklist: Checklist) => {
        setSelectedChecklist(checklist);
        if (checklist) {
            try {
                const itemsResponse = await getItemsRequest(checklist.id);
                const itemsData = await itemsResponse.json();
                setItems(itemsData);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        }
    };

    const handleItemClick = async (item: Items) => {
        try {
            const response = await updateItemRequest(item.checklistId, item.id, {
                checked: !item.checked,
            });
            if (response.ok) {
                // Actualizar el estado local para reflejar el cambio de color
                setItems(prevItems =>
                    prevItems.map(prevItem =>
                        prevItem.id === item.id ? { ...prevItem, checked: !prevItem.checked } : prevItem
                    )
                );
            }
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <div className="w-full flex flex-wrap gap-4 my-2 justify-center">
            {isLoading ? (
                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="text-gray-500">{loadingMessage}</p>
                    <Spinner />
                </div>
            ) : (
                <div className="w-full justify-between p-2 flex flex-row gap-4">
                    <div className="h-[750px] bg-gray-900 p-4 rounded-2xl flex flex-col gap-4 flex-shrink-0 overflow-y-auto">
                        {checklists.map((checklist) => (
                            <CheckListItem
                                key={checklist.id}
                                checklist={checklist}
                                onSelect={handleSelectChecklist}
                            />
                        ))}
                    </div>
                    <div className="h-[750px] bg-slate-900 w-full p-4 rounded-2xl">
                        {selectedChecklist ? (
                            isLoadingItems ? (
                                <div className="flex flex-col justify-center items-center gap-8">
                                    <p className="text-gray-500">
                                        Loading items...
                                    </p>
                                    <Spinner />
                                </div>
                            ) : (
                                <div className="h-full flex flex-col gap-6 flex-shrink-0 overflow-y-auto">
                                    <h1 className="text-3xl">
                                        {selectedChecklist.titulo}
                                    </h1>
                                    <ul className="flex flex-col gap-4">
                                        {items.map((item) => (
                                            <li
                                                key={item.id}
                                                className="flex items-center gap-4"
                                            >
                                                <IoCheckmarkDoneCircleOutline
                                                    className={item.checked
                                                        ? "text-green-500 hover:text-green-700 cursor-pointer h-6 w-6"
                                                        : "text-gray-500 hover:text-gray-300 cursor-pointer h-6 w-6"}
                                                    onClick={() => handleItemClick(item)}
                                                />
                                                <span
                                                    className={
                                                        item.checked
                                                            ? "line-through text-xl"
                                                            : "text-xl"
                                                    }
                                                >
                                                    {item.description}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        ) : (
                            <h1 className="text-3xl">
                                Please select a list...
                            </h1>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckList;
