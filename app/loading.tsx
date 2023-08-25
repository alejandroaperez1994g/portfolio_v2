const Loading = () => {
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-50">
            <div
                className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-r-2 border-l-2 border-[]"></div>
        </div>

    );
};
export default Loading;
