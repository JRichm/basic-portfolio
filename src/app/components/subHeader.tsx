export default function SubHeader() {
    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-6 place-items-center font-nunito_sans font-medium text-gray-500 transition-all duration-300">
                <a href="/" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Home</a>
                <a href="/projects" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Projects</a>
            </div>
        </div>
    )
}