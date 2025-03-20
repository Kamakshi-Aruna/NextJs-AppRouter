export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="mb-4">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h1 className="text-xl font-semibold text-gray-700">Loading...</h1>
            <p className="text-gray-500 mt-2">Please wait while we prepare your content</p>
        </div>
    );
}