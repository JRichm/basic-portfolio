export default function MainHeader() {
    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-6 place-items-center font-nunito_sans font-medium text-gray-500 transition-all duration-300">
                <a className="px-6 py-1 hover:text-gray-800 transition-all duration-300" href="">Resume</a>
            </div>
            <div className="border-2 border-slate-700 p-2 rounded-lg hover:cursor-pointer">
                <img src="https://static-00.iconduck.com/assets.00/moon-icon-2048x2048-m7zmqp7h.png" width={20} height={20} className="fill-blue-500"></img>
            </div>
        </div>
    )
}