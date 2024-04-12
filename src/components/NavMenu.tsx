import { useState } from "react";
import { Link } from "react-router-dom";
import { CiTextAlignLeft, CiTextAlignRight } from "react-icons/ci";
import { Links } from "../utils/StaticData";
import Switcher from "./Switcher";

function NavMenu() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prevState) => !prevState);

    return (
        <div className="p-4">
            {/* Botón para abrir el sidebar */}
            {!sidebarOpen && (
                <div className="w-full flex justify-center transition-all duration-300 transform">
                    <button onClick={toggleSidebar}>
                        <CiTextAlignLeft className="w-8 h-8 text-gray-900 dark:text-gray-100" />
                    </button>
                </div>
            )}
            {/* Sidebar */}
            <nav
                className={`flex flex-col transition-all duration-300 transform gap-4
                ${sidebarOpen ? "w-[200px]" : "w-[50px]"}`}
            >
                <div className="w-full flex justify-end">
                    <button onClick={toggleSidebar}>
                        <CiTextAlignRight
                            className={`w-8 h-8 text-gray-900 dark:text-gray-100 transition-all duration-300
                            ${sidebarOpen ? "" : "hidden"}`}
                        />
                    </button>
                </div>
                {/* Links */}
                {sidebarOpen ? (
                    <>
                        {Links.map(({ label, to }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center mt-12"
                            >
                                <Link
                                    to={to}
                                    className="text-gray-500 dark:text-gray-200 transition-colors duration-300 bg-slate-200 dark:bg-slate-500 w-full text-center p-2 rounded"
                                >
                                    {label}
                                </Link>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {Links.map(({ label, to, icon }) => (
                            <div
                                key={label}
                                className="bg-slate-200 dark:bg-slate-500 text-gray-500 dark:text-gray-200 flex justify-center mt-12 p-2 rounded"
                            >
                                <Link to={to}>{icon}</Link>
                            </div>
                        ))}
                    </>
                )}
                <hr className="mt-12 border-slate-500 dark:border-slate-200" />
                <div className="w-full h-[60px] flex justify-center items-center">
                    <Switcher />
                </div>
            </nav>
        </div>
    );
}

export default NavMenu;
