import CheckList from "../components/Lists/CheckList";
import { ChecklistProvider } from "../context/CheckList/ChecklistContext";

function List() {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-3xl font-semibold text-center block my-2 text-slate-500 dark:text-slate-200">
                    Check Lists
                </h1>
                <ChecklistProvider>
                    <div className="space-y-8">
                        <hr className="mt-12 border-slate-500 dark:border-slate-200" />
                        <CheckList />
                    </div>
                </ChecklistProvider>
            </div>
        </div>
    );
}

export default List;
