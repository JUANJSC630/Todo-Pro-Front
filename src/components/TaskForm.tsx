import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTasks } from "../context/useTasks.tsx";

interface TaskFormProps {
  onCloseAccordion: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCloseAccordion }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
    priority: "low",
  });

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
      title: "",
      description: "",
      done: false,
      priority: "low",
    });
    onCloseAccordion();
  };

  return (
    <div className="p-0 m-0">
      <form
        className="flex flex-col bg-gray-900 rounded-2xl border-2 border-gray-700 p-2 gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          className="w-full p-4 bg-gray-900 block rounded-2xl focus:outline-none"
          placeholder="Task......"
          onChange={handleChange}
          value={task.title}
          required={true}
        />
        <textarea
          name="description"
          className="w-full p-4 bg-gray-900 block rounded-2xl focus:outline-none"
          placeholder="Description"
          onChange={handleChange}
          value={task.description}
        ></textarea>
        <div className="flex flex-col gap-2 px-4">
          <label htmlFor="priority" className="text-gray-400">
            Priority:
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`w-6 h-6 rounded-full transition-colors duration-500 ${task.priority === "low" ? "bg-green-400" : "bg-green-400/50"}`}
              onClick={() => setTask({ ...task, priority: "low" })}
            ></button>
            <button
              type="button"
              className={`w-6 h-6 rounded-full transition-colors duration-500 ${task.priority === "medium" ? "bg-yellow-400" : "bg-yellow-400/50"}`}
              onClick={() => setTask({ ...task, priority: "medium" })}
            ></button>
            <button
              type="button"
              className={`w-6 h-6 rounded-full transition-colors duration-500 ${task.priority === "high" ? "bg-red-400" : "bg-red-400/50"}`}
              onClick={() => setTask({ ...task, priority: "high" })}
            ></button>
          </div>
        </div>
        <button className="w-full bg-indigo-500 text-white px-3 block p-2 rounded-2xl mt-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
