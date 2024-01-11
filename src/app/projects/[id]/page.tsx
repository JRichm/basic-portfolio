import Project from "./project";

interface ProjectType {
    name: string;
    description: string;
    date: string;
    id: string;
    videos: string[];
    images: string[];
}

const projects = require('../../../../public/data.json').projects;

export async function generateStaticParams() {
    return projects.map((project: ProjectType, index: number) => ({
        id: `${index}`,
        params: project, // Add the project as the 'params' property
    }));
}

export default function ProjectPage({ params }: { params: ProjectType }) {
    return <Project params={params} />;
}