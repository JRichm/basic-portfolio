'use client'
import React, { useState, useEffect } from 'react';

export default function SkillComponent() {
  const allCategories = ['Languages', 'Frameworks', 'Data', 'Tools', 'Apps']

  const skills: { [key: string]: string } = {
    'Java': 'Languages',
    'Python': 'Languages',
    'C#': 'Languages',
    'HTML': 'Languages',
    'CSS': 'Languages',
    'Javascript': 'Languages',
    'Typescript': 'Languages',
    'React': 'Frameworks',
    'Next.js': 'Frameworks',
    'PostgreSQL': 'Data',
    'MySQL': 'Data',
    'SQLlite': 'Data',
    'Excel': 'Data',
    'Power BI': 'Data',
    'GADD': 'Data',
    'Prisma': 'Data',
    'Linux': 'Languages',
    'JSON': 'Languages',
    'Amazon AWS': 'Tools',
    'Microsoft Azure': 'Tools',
    'Selenium': 'Tools',
    'Rollbar': 'Tools',
    'bit.io': 'Tools',
    'ServiceNow': 'Tools',
    'Cloud Hosting': 'Tools',
    'Flask': 'Frameworks',
    'Node.js': 'Frameworks',
    'OpenCV': 'Frameworks',
    'tkinter': 'Frameworks',
    'webpack': 'Frameworks',
    'jQuery': 'Frameworks',
    'VS Code': 'Apps',
    'Visual Studio': 'Apps',
    'Pycharm': 'Apps',
    'Eclipse': 'Apps',
    'Blender': 'Apps',
    'Adobe': 'Apps',
  }

  const [selectedCategories, setCategories] = useState(allCategories)
  const [shuffledSkills, setSkills] = useState<string[]>();
  

  // Function to shuffle an array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (!shuffledSkills) {
      setSkills(shuffleArray(Object.keys(skills)));
    }
  }, [shuffledSkills]);

  const getColorForCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      switch (category) {
        case 'Languages':
          return 'bg-cyan-900 text-white';
        case 'Frameworks':
          return 'bg-sky-700 text-white';
        case 'Data':
          return 'bg-indigo-600 text-white';
        case 'Tools':
          return 'bg-purple-600 text-white';
        case 'Apps':
          return 'bg-amber-600 text-white';
        default:
          return 'bg-gray-500 text-white';
      }
    } else {
        return 'bg-gray-200 text-black/25';
    }
  };
    
  let skillElements = [];

  if (shuffledSkills && Array.isArray(shuffledSkills)) {
    for (const skill of shuffledSkills) {
      const category = skills[skill];
      const colorClass = getColorForCategory(category)
      skillElements.push(
        <p key={skill} className={`${colorClass} px-3 rounded-full text-md font-medium text-white w-fit transition-all duration-700`}>
          {skill}
        </p>
      );
    }
  }
    
  const toggleCategory = (category: string) => {
    setCategories((prevCategories) => {
        if (prevCategories.includes(category)) {
            return prevCategories.filter((cat) => cat !== category);
        } else {
            return [...prevCategories, category];
        }
    });
  };
    
  return (
    <div className='flex flex-col place-items-center'>
      <div className='flex flex-row gap-2 mx-10 my-3 self-start'>
        <p>filter:</p>
          {(allCategories).map((category) => (
          <p key={category} onClick={() => toggleCategory(category)} className={`${getColorForCategory(category)} px-3 rounded-md hover:cursor-pointer border-2 border-gray-300/15 text-white transition-all hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.6)] hover:shadow-neutral-700/50 hover:border-neutral-700/25 outline outline-1 hover:outline-gray-gray-800`} >
              {`${category}`}
          </p>
          ))}
      </div>
      <div className='flex flex-row flex-wrap gap-2 justify-center bg-gray-200 p-6 mx-8 my-2 rounded-lg'>
        { skillElements }
      </div>
    </div>
  )
}
