"use client"

import React, { useState, useEffect } from 'react';

interface ProjectType {
    id: number;
    name: string;
    detail: string;
    images: string[];
    technologies: string[];
    aboutParagraphs: string[];
}

export default function ProjectComponent() {

    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [currentViewIndex, setViewIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setProjects(Object.values(data.projects));
            } catch (error) {
                console.error('error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    let projectElements = [];

    for (let i = currentViewIndex; i < currentViewIndex + 4 && i < projects.length; i++) {
        projectElements.push(
            <a href={`/projects/${i}`} key={projects[i].id} className='hover:tracking-normal tracking-wide bg-gradient-to-r from-cyan-800 via-fuchsia-500 to-amber-500 p-0 hover:p-1 w-[208px] aspect-square rounded-lg text-center flex flex-col justify-center font-bold hover:bg-gray-300/80 hover:cursor-pointer transition-all hover:duration-[0.2s] duration-300 hover:opacity-85' style={{ userSelect: 'none' }}>
                <div className='hover:bg-white bg-gray-50 h-full rounded-md p-3 flex flex-col'>
                    <h1 className='text-sm'>{projects[i]?.name || 'N/A'}</h1>
                    {
                        projects[i].images.length > 0 ? 
                        <div>
                            <img alt="project image" className='max-h-[100px]' src={`${projects[i].images[0]}`} width={200} height={200}></img>
                        </div>
                        :
                        <div>
                            <p className='text-gray-400 text-[10px] w-full'>no images found</p>
                        </div>
                    }
                    {
                        projects[i].technologies.length > 0 ?
                        <div className='flex flex-wrap gap-1.5 p-1 justify-center gap-y-0 w-[180px] self-center tracking-normal'>
                            {
                                projects[i].technologies.map(tech => (
                                    <p key={`${ tech.split('-')[0] }`} className='text-sm font-light'><em className='text-[10px] pr-0.5'>#</em>{`${ tech.split('-')[0] }`}</p>
                                ))
                            }
                        </div>
                        :
                        <div className='h-full py-2'>
                            <p className='text-sm font-light'>No technologies found..</p>
                        </div>
                    }
                </div>
            </a>
        );
    };

    const PreviousButton = () => {

        let canGoBack = () => {
            if (currentViewIndex - 1 < 0) return false;
            else return true;
        };

        return (
            <div className={`hover:bg-gray-300 bg-gray-100 h-20 m-[-10px] rounded-md flex place-items-center p-2 hover:cursor-pointer`} onClick={ () => canGoBack() ? setViewIndex(currentViewIndex - 1) : console.log('cannot go back') }>
                <img alt="previous" src={'/backIcon.webp'} className='opacity-25' width={16} height={16} style={{ userSelect: 'none' }}></img>
            </div>
        );
    };

    const NextButton = () => {

        let canGoForward = () => {
            if (currentViewIndex + 5 > projects.length) return false;
            else return true;
        };

        return (
            <div className='hover:bg-gray-300 bg-gray-100 h-20 m-[-10px] rounded-md flex place-items-center p-2 hover:cursor-pointer' onClick={ () => canGoForward() ? setViewIndex(currentViewIndex + 1) : console.log('cannot go forward') }>
                <img alt="next" src={'/forwardIcon.webp'} className='opacity-25' width={16} height={16} style={{ userSelect: 'none' }}></img>
            </div>
        );
    };

    return (
        <div className='flex flex-row gap-5 place-items-center justify-center bg-gray-200 rounded-md py-4'>
            <PreviousButton />
            { projectElements }
            <NextButton />
        </div>
    );
}