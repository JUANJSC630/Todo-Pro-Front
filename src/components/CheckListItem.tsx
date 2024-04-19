import { Checklist } from "../interfaces/checklist.interface.ts";
import { useChecklists } from "../context/CheckList/useChecklists.tsx";
import { IoTrashOutline } from "react-icons/io5";

interface Props {
    checklist: Checklist;
}

function CheckListItem({ checklist }: Props) {
    const { deleteChecklist } = useChecklists();
    return (
        <div
            key={String(checklist.id)}
            className="w-full h-full md:w-[250px] lg:w-[350px] bg-slate-600 flex flex-col hover:cursor-pointer rounded-2xl"
        >
            <div className="w-full flex justify-between items-start p-4 bg-slate-900/20 rounded-t-2xl">
                <div className="w-[75%]">
                    <h1 className="break-all">{checklist.titulo}</h1>
                </div>
                <div className="flex gap-2">
                    <IoTrashOutline
                        className="text-red-500 hover:text-red-700 cursor-pointer h-6 w-6"
                        onClick={async () => {
                            // if (window.confirm('Are you sure you want to delete this checklist?'))
                            await deleteChecklist(checklist.id);
                        }}
                    ></IoTrashOutline>
                </div>
            </div>
            <div className="w-full flex flex-col justify-between items-start p-4">
                    {
                        checklist.items.map((items) => (
                            <div key={String(items.id)} className="flex items-center gap-2">
                                <input className="accent-green-400/80 h-4 w-4" type="checkbox" checked={items.checked} />
                                <p>{items.description}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}

export default CheckListItem;
