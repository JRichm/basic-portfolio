"use client"

import { useState } from 'react';

export default function NightLight () {
    const [currentTheme, setTheme] = useState(true);
    const [isHovering, setHovering] = useState(false);

    let color = "slate-700"

    if (currentTheme)  {
        color = isHovering ? "amber-500" : "slate-700" 
    } else {
        color = isHovering ? "slate-700" : "amber-500"
    }

    return (
        <div className={`border-2 border-${color} p-2 rounded-lg hover:cursor-pointer transition-colors duration-300`} onMouseEnter={e => setHovering(true)} onMouseLeave={e => setHovering(false)} onClick={e => setTheme(!currentTheme)}>
            <div className={`bg-${color} w-[25px] h-[25px] rounded-full transition-colors duration-300`}></div>
            <div className={`bg-gray-100 ${(!currentTheme && isHovering) || (currentTheme && !isHovering) ? "w-[20px] h-[20px]" : "m-1 ml-6 w-[0px] h-[0px]"} transition-all duration-200 rounded-full absolute top-5 ml-2.5`}></div>
        </div>
    )
}