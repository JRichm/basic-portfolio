"use client"

export default function MainHeader() {
    
    const handleNightModeHover = () => {

    }

    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-6 place-items-center font-nunito_sans font-medium text-gray-500 transition-all duration-300">
                <a href="R.pdf" target="_blank" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Resume</a>
            </div>
            <div className="border-2 border-slate-700 p-2 rounded-lg hover:cursor-pointer transition-all" onMouseEnter={handleNightModeHover}>
                <div className="bg-slate-700 w-[25px] h-[25px] rounded-full"></div>
                <div className="bg-gray-100 w-[20px] h-[20px] rounded-full absolute top-5 ml-2.5"></div>
            </div>
        </div>
    )
}