import { Route, Routes } from "react-router-dom";
import ToDo from "../pages/ToDo.tsx";
import List from "../pages/List.tsx";
import Notes from "../pages/Notes.tsx";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/list" element={<List />} />
            <Route path="/notes" element={<Notes />} />
        </Routes>
    );
}

export default MyRoutes;
