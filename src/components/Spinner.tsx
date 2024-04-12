function Spinner() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex space-x-1">
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{ animation: "bounce 1s infinite alternate" }}
                ></div>
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{
                        animation: "bounce 1s infinite alternate",
                        animationDelay: "0.1s",
                    }}
                ></div>
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{
                        animation: "bounce 1s infinite alternate",
                        animationDelay: "0.2s",
                    }}
                ></div>
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{
                        animation: "bounce 1s infinite alternate",
                        animationDelay: "0.3s",
                    }}
                ></div>
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{
                        animation: "bounce 1s infinite alternate",
                        animationDelay: "0.4s",
                    }}
                ></div>
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{
                        animation: "bounce 1s infinite alternate",
                        animationDelay: "0.5s",
                    }}
                ></div>
                <div
                    className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"
                    style={{
                        animation: "bounce 1s infinite alternate",
                        animationDelay: "0.6s",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Spinner;
