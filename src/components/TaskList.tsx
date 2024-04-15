import { useEffect, useState } from "react";
import TaskItem from "./TaskItem.tsx";
import { useTasks } from "../context/useTasks.tsx";
import Spinner from "./Spinner.tsx";

function TaskList() {
    const { tasks, isLoading } = useTasks();
    const [loadingMessage, setLoadingMessage] = useState("Loading tasks...");

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoading) {
                setLoadingMessage("Still loading tasks...");
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
        <div className="w-full flex flex-wrap gap-4 my-2 justify-center">
            {isLoading ? (
                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="text-gray-500">{loadingMessage}</p>
                    <Spinner />
                </div>
            ) : (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
            )}
        </div>
    );
}

export default TaskList;
