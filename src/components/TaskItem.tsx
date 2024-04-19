import { Task } from "../interfaces/task.interface.ts";
import { useTasks } from "../context/Tasks/useTasks.tsx";
import { IoCheckmarkDoneSharp, IoTrashOutline } from "react-icons/io5";

interface Props {
    task: Task;
}

function TaskItem({ task }: Props) {
    const { deleteTask, updateTask } = useTasks();
    return (
        <div
            key={String(task.id)}
            className="w-full h-full md:w-[250px] lg:w-[350px] bg-slate-600 flex flex-col hover:cursor-pointer rounded-2xl"
        >
            <span
                {...(task.priority === "low"
                    ? { className: "bg-gradient-to-r from-green-400/80 w-full p-2 rounded-t-2xl" }
                    : task.priority === "medium"
                    ? { className: "bg-gradient-to-r from-yellow-400/90 w-full p-2 rounded-t-2xl" }
                    : { className: "bg-gradient-to-r from-red-400/90 w-full p-2 rounded-t-2xl" })}
            ></span>
            <div className="w-full flex justify-between items-start p-4">
                <div className="w-[75%]">
                    <h1 className="break-all">{task.title}</h1>
                    <hr className="border-gray-600" />
                    <p className="break-all font-light text-gray-400">{task.description}</p>
                </div>
                <div className="flex gap-2">
                    <IoCheckmarkDoneSharp
                        {...(task.done
                            ? {
                                className:
                                    "text-green-500 hover:text-green-700 cursor-pointer h-6 w-6",
                            }
                            : {
                                className:
                                    "text-gray-900 hover:text-gray-700 cursor-pointer h-6 w-6",
                            })}
                        onClick={async () => {
                            await updateTask(task.id, {
                                done: !task.done,
                            });
                        }}
                    ></IoCheckmarkDoneSharp>
                    <IoTrashOutline
                        className="text-red-500 hover:text-red-700 cursor-pointer h-6 w-6"
                        onClick={async () => {
                            // if (window.confirm('Are you sure you want to delete this task?'))
                            await deleteTask(task.id);
                        }}
                    ></IoTrashOutline>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
