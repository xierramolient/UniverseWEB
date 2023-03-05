import clquConfig from "../../clqu.config";

export default function Error({ statusCode }) {
    return <div className="flex flex-col items-center justify-center py-56">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white"></h1>
        <p className="text-2xl text-gray-500 dark:text-gray-500">You dont have permission to view this page.</p>
    </div>;
}