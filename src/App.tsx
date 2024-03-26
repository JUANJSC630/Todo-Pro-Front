// App.js
import { useState } from "react";
import TaskList from "./components/TaskList.tsx";
import { TaskProvider } from "./context/TaskContext.tsx";
import { Accordion } from "./components/Accordion.tsx";
import TaskForm from "./components/TaskForm.tsx";
import NavMenu from "./components/NavMenu.tsx";

function App() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="bg-zinc-950 h-screen text-white flex items-center justify-start p-4">
      <NavMenu />
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center block my-2">
          To Do List
        </h1>
        <TaskProvider>
          <Accordion
            items={[
              {
                title: "Task......",
                content: <TaskForm onCloseAccordion={toggleAccordion} />,
              },
            ]}
          />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  );
}

export default App;
