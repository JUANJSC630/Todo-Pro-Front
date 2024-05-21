import { Checklist } from "../interfaces/checklist.interface.ts";
import { useChecklists } from "../context/CheckList/useChecklists.tsx";
import { IoTrashOutline } from "react-icons/io5";
// import { useState } from "react";

interface Props {
    checklist: Checklist;
    onSelect: (checklist: Checklist) => void;
}

function CheckListItem({ checklist, onSelect }: Props) {
    const { deleteChecklist } = useChecklists();
    // const [items, setItems] = useState(checklist.items);

    // const handleCheckboxChange = (id: string) => {
    //     setItems(prevItems =>
    //         prevItems.map(item =>
    //             item.id === id ? { ...item, checked: !item.checked } : item
    //         )
    //     );
    // };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Enero es 0
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    return (
        <div
            key={String(checklist.id)}
            className="w-full md:w-[250px] lg:w-[350px] bg-slate-600 flex flex-col hover:cursor-pointer hover:bg-slate-500 transition-all duration-300 rounded-2xl"
            onClick={() => onSelect(checklist)}
        >
            <div className="w-full flex justify-between items-start p-4 bg-slate-900/20 rounded-t-2xl">
                <div className="w-[75%]">
                    <h1 className="break-words">{checklist.titulo}</h1>
                    <h3 className="text-sm font-light text-slate-400">{formatDate(checklist.createdAt)}</h3>
                </div>
                <div className="flex gap-2">
                    <IoTrashOutline
                        className="text-red-500 hover:text-red-700 cursor-pointer h-6 w-6"
                        onClick={async () => {
                            // if (window.confirm('Are you sure you want to delete this checklist?'))
                            await deleteChecklist(checklist.id);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CheckListItem;
