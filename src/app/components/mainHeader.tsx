import NightLight from "./nightLight"

export default function MainHeader() {

    return (
        <div className="flex flex-row justify-between p-3">
            <div className="flex flex-row gap-6 place-items-center font-nunito_sans font-medium text-gray-500 transition-all duration-300">
                <a href="R.pdf" target="_blank" className="px-6 py-1 hover:text-gray-800 transition-all duration-300">Resume</a>
            </div>
            <NightLight />
        </div>
    )
}