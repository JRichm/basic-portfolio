import Image from "next/image"

export default function MainHeader() {
    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-6 place-items-center font-nunito_sans font-medium text-gray-500 transition-all duration-300">
                <a href="R.pdf" target="_blank" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Resume</a>
            </div>
            <div className="border-2 border-slate-700 p-2 rounded-lg hover:cursor-pointer">
                <Image src="/images/icons/moon.png" alt='night-mode-toggle' width={20} height={20} className="fill-blue-500"></Image>
            </div>
        </div>
    )
}