import { useEffect, useState } from "react";
import CheckListItem from "../CheckListItem.tsx";
import { useChecklists } from "../../context/CheckList/useChecklists.tsx";
import Spinner from "../Spinner.tsx";

function CheckList() {
    const { checklists, isLoading } = useChecklists();
    const [loadingMessage, setLoadingMessage] = useState("Loading checklists...");

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isLoading) {
                setLoadingMessage("Still loading checklists...");
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
        <div className="w-full flex flex-wrap gap-4 my-2 justify-center">
            {isLoading ? (
                <div className="flex flex-col justify-center items-center gap-8">
                    <p className="text-gray-500">{loadingMessage}</p>
                    <Spinner />
                </div>
            ) : (
                checklists.map((checklists) => <CheckListItem key={checklists.id} checklist={checklists} />)
            )}
        </div>
    );
}

export default CheckList;
