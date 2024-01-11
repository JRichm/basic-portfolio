export default function HeroComponent() {
    return (
        <div className="bg-gray-100 p-8 py-24 flex flex-row justify-between">
            <div>
                <h1 className="text-5xl font-bold font-nunito_sans">James Richmond</h1>
                <h6>Software Developer</h6>
                <p className="max-w-[600px] py-4">Building websites, applications, and everything in between.</p>
                <div className="flex flex-row gap-2">
                    <a target="_blank" href="https://www.linkedin.com/in/jrichm444/"><svg className="w-[40px] fill-neutral-700/25 hover:fill-sky-700 transition-colors rounded duration-200" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 455 455"><path d="M246 204zM0 0v455h455V0H0zm142 378H74V175h68v203zm-34-231h-1c-22 0-37-15-37-35s15-35 38-35 38 15 38 35-15 35-38 35zm277 231h-68V269c0-27-9-46-34-46-18 0-29 13-34 25-2 4-3 10-3 17v113h-67V175h67v29c9-14 25-34 61-34 45 0 78 29 78 92v116z"/></svg></a>
                    <a target="_blank" href="https://www.github.com/JRichm/"><svg className="w-[40px] fill-neutral-700/25 hover:fill-gray-100 outline -outline-offset-1 transition-all hover:bg-gray-700 outline-gray-100 rounded-full duration-200" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 640 640"><path d="M320 8a320 320 0 0 0-101 624c16 3 22-7 22-16l-1-59c-89 19-108-38-108-38-14-37-35-47-35-47-29-20 2-19 2-19 32 2 49 33 49 33 29 48 75 34 93 26 3-21 11-35 21-43-71-8-146-35-146-158 0-35 12-63 33-86-4-8-14-40 3-84 0 0 27-9 88 32a307 307 0 0 1 160 0c61-41 88-32 88-32 17 44 7 76 3 84 21 23 33 51 33 86 0 123-75 150-146 158 11 10 22 29 22 59l-1 88c0 9 6 19 22 15A320 320 0 0 0 320 8z" /></svg></a>
                </div>
            </div>
        </div>
    )
}