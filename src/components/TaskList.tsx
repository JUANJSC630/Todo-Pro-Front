import TaskItem from "./TaskItem.tsx";
import { useTasks } from "../context/useTasks.tsx";

function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="w-full flex flex-wrap gap-4 my-2 justify-center">
      {tasks.map((task) => (
        <TaskItem task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TaskList;
