import SubHeader from '@/app/components/subHeader';

interface ProjectType {
    name: string;
    description: string;
    date: string;
    id: string;
    videos: string[];
    images: string[];
    aboutParagraphs: string[];
}

interface ProjectProps {
    params: { id: string };
}


const projects = require('../../../../public/data.json').projects

export default function Project({ params }: ProjectProps) {
    const { id } = params;
    const project = projects[id];

    const getColorForCategory = (category: string) => {
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
    };

    return (
        <main className="flex flex-col bg-gray-100 min-h-screen">
            <div className="lg:w-[1000px] max-w-screen self-center pb-36 flex flex-col">
                <div>
                    <SubHeader />
                </div>
                <hr className='mx-4'/>
                <div>
                    {project ? (
                        <div className='flex flex-col place-items-center mx-6'>
                            <div className='flex lg:flex-row flex-col-reverse lg:py-12 my-6 w-full'>
                                <div className='flex flex-col lg:p-12 lg:px-12 px-6 lg:pb-12 pb-6 gap-3 w-full'>
                                    <h1 className='tracking-tighter text-4xl font-bold font-nunito_sans'>{project.name}</h1>
                                    {
                                        project.technologies.length > 0 ?
                                        <div className='flex flex-row flex-wrap gap-1'>
                                            {project.technologies.map((tech: string, index: number) => (
                                                <p key={index} className={`${getColorForCategory(tech.split('-')[1])} w-fit h-fit text-center px-3 rounded-full text-sm`}>
                                                    {tech.split('-')[0]}
                                                </p>
                                            ))}
                                        </div>
                                        :
                                        <div>
                                            <p>no tech listed...</p>
                                        </div>
                                    }
                                    <p>{project.description}</p>
                                    {project.videos && project.videos.length > 0 &&
                                        <a href={ project.videos[0] } target='_blank' className='w-fit px-6 py-1 mt-2 rounded border-amber-500 border-2 font-nunito_sans font-bold text-amber-500 hover:bg-amber-500 hover:text-white transition-all'>Demo Video</a>
                                    }
                                </div>
                                <div className='flex justify-center lg:p-12 p-6 lg:max-w-[50%]'>
                                    <img alt='project-image' src={project.images[0]} className='lg:rounded-md rounded'></img>
                                </div>
                            </div>
                            <hr className='w-full' />
                            
                            <div className='bg-gray-100 flex flex-col pt-12 gap-6'>
                                <h1 className='mx-6 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans'>About</h1>
                                {
                                    project.aboutParagraphs.length > 0 ?
                                    <div className='flex flex-col gap-6 px-6'>
                                        {project.aboutParagraphs.map((about: string, index: number) => (
                                            <p key={index} className='indent-6'>
                                                {about}
                                            </p>
                                        ))}
                                    </div>
                                    :
                                    <div>
                                        <p className='text-center text-gray-400'>No data found</p>
                                    </div>
                                }
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </main>
    )
}