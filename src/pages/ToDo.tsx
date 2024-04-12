import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { TaskProvider } from "../context/TaskContext";

function ToDo() {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-3xl font-semibold text-center block my-2 text-slate-500 dark:text-slate-200">
                    To Do List
                </h1>
                <TaskProvider>
                    <div className="space-y-8">
                        <TaskForm />
                        <hr className="mt-12 border-slate-500 dark:border-slate-200" />
                        <TaskList />
                    </div>
                </TaskProvider>
            </div>
        </div>
    );
}

export default ToDo;
