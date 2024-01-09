export default function SubHeader() {
    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-6 place-items-center font-nunito_sans font-medium text-gray-500 transition-all duration-300">
                <a href="/" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Home</a>
                <a href="/projects" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Projects</a>
            </div>
            <div className="border-2 border-slate-700 p-2 rounded-lg hover:cursor-pointer">
                <img src="/moon.png" alt='night-mode-toggle' width={20} height={20} className="fill-blue-500"></img>
            </div>
        </div>
    )
}