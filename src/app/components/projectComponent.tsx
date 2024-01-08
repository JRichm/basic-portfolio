"use client"

import React, { useState, useEffect } from 'react';

const projects = [0,1,2,3,4,5,6]

interface ProjectType {
    id: number;
    name: string;
    detail: string;
    images: string[];
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
            <div key={projects[i].id} className='bg-gradient-to-r from-cyan-800 via-fuchsia-500 to-amber-500 p-0 hover:p-1 w-[25%] h-[200px] rounded-md text-center flex flex-col justify-center font-bold hover:bg-gray-300/80 hover:cursor-pointer transition-all duration-200 hover:opacity-85' style={{ userSelect: 'none' }}>
                <div className='hover:bg-white bg-gray-50 h-full w-full rounded-sm p-3 flex flex-col justify-center'>
                    <h1 className='text-sm'>{projects[i]?.name || 'N/A'}</h1>
                    {
                        projects[i].images.length > 0 ? 
                        <div>
                            <img src={`${projects[i].images[0]}`}></img>
                        </div>
                        :
                        <div>
                            <p className='text-gray-400 text-[10px]'>no images found</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
    const PreviousButton = () => {

        let canGoBack = () => {
            if (currentViewIndex - 1 < 0) return false;
            else return true;
        }

        return (
            <div className='bg-gray-200 w-8 h-20 m-[-10px] rounded-md flex place-items-center p-2 hover:cursor-pointer' onClick={ () => canGoBack() ? setViewIndex(currentViewIndex - 1) : console.log('cannot go back') }>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/TriangleArrow-Left.svg/1200px-TriangleArrow-Left.svg.png" className='opacity-25' style={{ userSelect: 'none' }}></img>
            </div>
        )
    }

    const NextButton = () => {

        let canGoForward = () => {
            if (currentViewIndex + 5 > projects.length) return false;
            else return true;
        }

        return (
            <div className='bg-gray-200 w-8 h-20 m-[-10px] rounded-md flex place-items-center p-2 hover:cursor-pointer' onClick={ () => canGoForward() ? setViewIndex(currentViewIndex + 1) : console.log('cannot go forward') }>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TriangleArrow-Right.svg/461px-TriangleArrow-Right.svg.png?20060109153651" className='opacity-25' style={{ userSelect: 'none' }}></img>
            </div>
        )
    }

    return (
        <div className='flex flex-row gap-5 place-items-center justify-center px-12'>
            <PreviousButton />
            { projectElements }
            <NextButton />
        </div>
    )
}