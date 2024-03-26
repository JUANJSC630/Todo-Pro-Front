import React, { createContext, useEffect, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../api/task.tsx";
import { CreateTask, Task, UpdateTask } from "../interfaces/task.interface.ts";

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: UpdateTask) => Promise<void>;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: async () => {},
  deleteTask: async () => {},
  updateTask: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async (task: CreateTask) => {
    const response = await createTaskRequest(task);
    const data = await response.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id: string) => {
    const response = await deleteTaskRequest(id);
    if (response.ok) {
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  const updateTask = async (id: string, task: UpdateTask) => {
    const response = await updateTaskRequest(id, task);
    const data = await response.json();
    setTasks(
      tasks.map((task) => (task._id === id ? { ...task, ...data } : task)),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
