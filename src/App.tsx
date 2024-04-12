import MyRoutes from "./routers/routes.tsx";
import NavMenu from "./components/NavMenu.tsx";

function App() {
    return (
        <div className="text-white flex justify-start">
            <div className="h-screen bg-gray-100 dark:bg-slate-700">
                <NavMenu />
            </div>
            <div className="w-full p-8 bg-gray-200 dark:bg-slate-800">
                <MyRoutes />
            </div>
        </div>
    );
}

export default App;
