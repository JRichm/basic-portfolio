import SubHeader from '@/app/components/subHeader';

interface ProjectType {
    name: string;
    description: string;
    date: string;
    videos: string[];
    images: string[];
}

interface ProjectPageProps {
    project: ProjectType;
}

const data = require('../../../../public/data.json').projects;

export async function generateStaticParams() {
    console.log('generating staticParams')
    return data.map((project: ProjectType, index: number) => ({
        params: {
            id: index.toString(), // Use index as a simple identifier
        },
    }));
}

export default function ProjectPage({ project }: ProjectPageProps) {

    return (
        <main className="flex flex-col bg-gray-100">
            <div className="w-[1000px] max-w-screen self-center pb-36 flex flex-col">
                <div>
                    <SubHeader />
                </div>
                <hr />
                <div>
                    {project ? (
                        <div>
                            <div className='bg-gray-100 flex flex-row py-24 gap-6'>
                                <div className='flex flex-col p-12 gap-2'>
                                    <h1 className='tracking-tighter text-4xl font-bold font-nunito_sans'>{project.name}</h1>
                                    <p>{project.description}</p>
                                    {project.videos && project.videos.length > 0 &&
                                        <a href={ project.videos[0] } target='_blank' className='w-fit px-6 py-1 rounded border-amber-500 border-2 font-nunito_sans font-bold text-amber-500 hover:bg-amber-500 hover:text-white transition-all'>Demo Video</a>
                                    }
                                </div>
                                <div className='flex justify-center p-12'>
                                    <img src={project.images[0]}></img>
                                </div>
                            </div>
                            <hr />
                            <div className='bg-gray-100 flex flex-col pt-12 gap-6'>
                                <h1 className='mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans'>Technologies</h1>
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