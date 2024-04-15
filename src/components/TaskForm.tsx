import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { useTasks } from "../context/useTasks.tsx";

const TaskForm: React.FC = () => {
    const [task, setTask] = useState({
        id: "",
        title: "",
        description: "",
        done: false,
        priority: "low",
    });

    const [expanded, setExpanded] = useState(false);

    const { createTask } = useTasks();

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createTask(task);
        setTask({
            id: "",
            title: "",
            description: "",
            done: false,
            priority: "low",
        });
        setExpanded(false);
    };

    const formRef = useRef<HTMLFormElement>(null); // Referencia al formulario

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                setExpanded(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full h-[72px] flex justify-center">
            <form
                ref={formRef}
                className="md:w-full lg:w-2/6 absolute flex flex-col rounded-2xl gap-2 py-2 transition-all duration-500 backdrop-blur-xl bg-black/40"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="title"
                    className="w-full p-4 bg-transparent block rounded-2xl focus:outline-none placeholder-white"
                    placeholder="Task..."
                    onChange={handleChange}
                    value={task.title}
                    required={true}
                    onClick={() => setExpanded(true)}
                />
                {expanded && (
                    <>
                        <textarea
                            name="description"
                            className="w-full bg-transparent block p-4 rounded-2xl focus:outline-none placeholder-white"
                            placeholder="Description"
                            onChange={handleChange}
                            value={task.description}
                        ></textarea>
                        <div className="flex flex-col gap-2 p-4">
                            <label htmlFor="priority" className="text-white">
                                Priority:
                            </label>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className={`w-6 h-6 rounded-full transition-colors duration-500 ${task.priority === "low" ? "bg-green-400 border-2" : "bg-green-400/50"}`}
                                    onClick={() =>
                                        setTask({ ...task, priority: "low" })
                                    }
                                ></button>
                                <button
                                    type="button"
                                    className={`w-6 h-6 rounded-full transition-colors duration-500 ${task.priority === "medium" ? "bg-yellow-400 border-2" : "bg-yellow-400/50"}`}
                                    onClick={() =>
                                        setTask({ ...task, priority: "medium" })
                                    }
                                ></button>
                                <button
                                    type="button"
                                    className={`w-6 h-6 rounded-full transition-colors duration-500 ${task.priority === "high" ? "bg-red-400 border-2" : "bg-red-400/50"}`}
                                    onClick={() =>
                                        setTask({ ...task, priority: "high" })
                                    }
                                ></button>
                            </div>
                        </div>
                        <div className="p-2">
                            <button className="w-full bg-indigo-500 text-white block p-2 rounded-2xl">
                                Add
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
};

export default TaskForm;
