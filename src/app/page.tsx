
import Image from "next/image"

import SkillComponent from "./components/skillComponent"
import ProjectComponent from "./components/projectComponent"
import HeroComponent from "./components/heroComponent"
import ContactComponent from "./components/contactComponent"
import MainHeader from "./components/mainHeader"

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-100">
      <div className="w-[1000px] max-w-screen self-center pb-36">
        <div>
          <MainHeader />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col mt-36">
          <HeroComponent />
        </div>

        {/* Projects Section */}
        <div className="bg-gray-100 flex flex-col pt-24 gap-6">
          <h1 className="mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans">Projects</h1>
          <ProjectComponent />
          <a href="https://www.github.com/JRichm/" target="_blank" className="mx-12 px-6 py-2 w-fit text-lg hover:bg-white/50 rounded-md transition-all duration-300">See all projects →</a>
        </div>

        {/* Skills Section */}  
        <div className="bg-gray-100 pt-24">
          <h1 className="mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans">Skills</h1>
          <div className="pb-12">
            <SkillComponent /> 
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-100 pt-24">
          <h1 className="mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans">About</h1>
          <div className="grid grid-cols-2">
            <p>👋 Hey there! I&aposm James, a passionate full-stack developer based in Sandy, Utah. Solving coding puzzles is my forte, and I take pride in turning complex challenges into elegant solutions.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 pt-24">
          <h1 className="mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans">Contact</h1>
          <ContactComponent />
        </div>
      </div>
    </main>
  )
}
