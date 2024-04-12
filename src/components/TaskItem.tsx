import { Task } from "../interfaces/task.interface.ts";
import { useTasks } from "../context/useTasks.tsx";
import { IoCheckmarkDoneSharp, IoTrashOutline } from "react-icons/io5";

interface Props {
    task: Task;
}

function TaskItem({ task }: Props) {
    const { deleteTask, updateTask } = useTasks();

    return (
        <div
            key={task._id}
            className="w-full h-full md:w-[250px] lg:w-[300px] bg-gray-900 flex flex-col hover:bg-gray-800 hover:cursor-pointer rounded-2xl"
        >
            <span
                {...(task.priority === "low"
                    ? { className: "bg-green-500 w-full p-2 rounded-t-2xl" }
                    : task.priority === "medium"
                      ? { className: "bg-yellow-500 w-full p-2 rounded-t-2xl" }
                      : { className: "bg-red-500 w-full p-2 rounded-t-2xl" })}
            ></span>
            <div className="w-full flex justify-between items-start p-4">
                <div className="w-[60%]">
                    <h1 className="break-all">{task.title}</h1>
                    <p className="break-all">{task.description}</p>
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
                                      "text-gray-500 hover:text-gray-700 cursor-pointer h-6 w-6",
                              })}
                        onClick={async () => {
                            await updateTask(task._id, {
                                done: !task.done,
                            });
                        }}
                    ></IoCheckmarkDoneSharp>
                    <IoTrashOutline
                        className="text-red-500 hover:text-red-700 cursor-pointer h-6 w-6"
                        onClick={async () => {
                            // if (window.confirm('Are you sure you want to delete this task?'))
                            await deleteTask(task._id);
                        }}
                    ></IoTrashOutline>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;
