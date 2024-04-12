import { LuListTodo } from "react-icons/lu";
import { IoCheckmarkDone } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";

const Styles =
    "w-6 h-6 text-gray-500 dark:text-gray-200 hover:text-gray-900 transition-colors duration-300";

export const Links = [
    {
        label: "To Do List",
        to: "/",
        icon: <IoCheckmarkDone className={Styles} />,
    },
    {
        label: "Checklist",
        to: "/list",
        icon: <LuListTodo className={Styles} />,
    },
    {
        label: "Notes",
        to: "/notes",
        icon: <GoLightBulb className={Styles} />,
    },
];
