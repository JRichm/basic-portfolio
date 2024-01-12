
import Image from "next/image"

import SkillComponent from "./components/skillComponent"
import ProjectComponent from "./components/projectComponent"
import HeroComponent from "./components/heroComponent"
import ContactComponent from "./components/contactComponent"
import MainHeader from "./components/mainHeader"

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-100 max-w-screen">
      <div className="max-w-[1000px] w-screen self-center pb-36">
        <div>
          <MainHeader />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col mt-36">
          <HeroComponent />
        </div>

        {/* About Section */}
        <div className="bg-gray-100 pt-24 flex flex-col px-10">
          <h1 className="pb-6 tracking-tighter lg:text-3xl text-2xl mt-8 font-bold font-nunito_sans">Curious about the future of tech and innovation?</h1>
          <p className="indent-4 mb-4">I&rsquo;m James, a dynamic software engineer ready to take you on a journey of coding, collaboration, and creativity. Despite being relatively new to the professional scene, the advantages of working with me are crystal clear.</p>
          <p className="indent-4">After college, I took a leap of faith, graduating from a rigorous software engineering bootcamp last year. Over the past three years, my passion for coding has evolved into a commitment to clean, efficient, and well-documented code.</p>
          <h1 className="p-6 mt-12 tracking-normal text-2xl font-medium font-nunito_sans">Why explore with me?</h1>
          <div className="flex lg:flex-row gap-4 flex-col w-full place-self-center place-items-center">
            <p className="flex flex-col lg:w-full max-w-screen w-[80%] place-items-center text-center mt-4"><em className="mb-1 not-italic indent-0 w-[200%] font-medium">🚀 Innovative Solutions</em>Challenges excite me, and I bring fresh perspectives to ensure innovative and effective solutions.</p>
            <p className="flex flex-col lg:w-full max-w-screen w-[80%] place-items-center text-center mt-4"><em className="mb-1 not-italic indent-0 w-[200%] font-medium">🤝 Collaborative Spirit</em>My enthusiasm for collaboration fosters an environment where ideas flourish, leading to creative and impactful outcomes.</p>
            <p className="flex flex-col lg:w-full max-w-screen w-[80%] place-items-center text-center mt-4"><em className="mb-1 not-italic indent-0 w-[200%] font-medium">💻 Tech Toolkit</em>Proficient in deploying full-stack applications, I bring a versatile skill set and a hunger for staying at the forefront of technological advancements.</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-gray-100 flex flex-col pt-24 gap-6-">
          <h1 className="mx-10 lg:pb-6 tracking-tighter text-3xl font-bold font-nunito_sans">Projects</h1>
          <div className="px-6 py-4 self-center">
            <ProjectComponent />
          </div>
          <a href="https://github.com/JRichm?tab=repositories" target="_blank" className="mx-12 px-6 lg:py-2 w-fit text-lg hover:bg-white/50 rounded-md transition-all duration-300">See all projects on github →</a>
        </div>

        {/* Skills Section */}  
        <div className="bg-gray-100 pt-24">
          <h1 className="mx-10 lg:pb-6 tracking-tighter text-3xl font-bold font-nunito_sans">Skills</h1>
          <div className="pb-12">
            <SkillComponent /> 
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 pt-24">
          <h1 className="mx-10 lg:pb-6 tracking-tighter text-3xl font-bold font-nunito_sans">Contact</h1>
          <ContactComponent />
        </div>
      </div>
    </main>
  )
}
