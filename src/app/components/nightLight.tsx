"use client"

import { useState } from 'react';


export default function NightLight () {

    
    const [currentTheme, setTheme] = useState(true);
    const [isHovering, setHovering] = useState(false);

    return (
        <div className={`border-2 ${(!currentTheme && isHovering) || (currentTheme && !isHovering) ? "border-gray-300" : "border-slate-700"} p-2 rounded-lg hover:cursor-pointer transition-colors duration-300`} onMouseEnter={e => setHovering(true)} onMouseLeave={e => setHovering(false)} onClick={e => setTheme(!currentTheme)}>
            <div className={`${(!currentTheme && isHovering) || (currentTheme && !isHovering) ? "bg-gray-300" : "bg-slate-700"} w-[25px] h-[25px] rounded-full transition-colors duration-300`}></div>
            <div className={`${(!currentTheme && isHovering) || (currentTheme && !isHovering) ? "bg-transparent m-1 ml-6 w-[0px] h-[0px]": "bg-gray-100 w-[20px] h-[20px]"} transition-all duration-200 rounded-full absolute top-5 ml-2.5`}></div>
        </div>
    )
}