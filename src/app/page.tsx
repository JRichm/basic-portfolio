
import Image from 'next/image'

import SkillComponent from './components/skillComponent'
import ProjectComponent from './components/projectComponent'
import HeroComponent from './components/heroComponent'
import ContactComponent from './components/contactComponent'
import MainHeader from './components/mainHeader'

export default function Home() {
  return (
    <main className='flex flex-col bg-gray-100'>
      <div className='w-[1000px] max-w-screen self-center pb-36'>
        <div>
          <MainHeader />
        </div>

        {/* Hero Section */}
        <div className='flex flex-col mt-36'>
          <HeroComponent />
        </div>

        {/* Projects Section */}
        <div className='bg-gray-100 flex flex-col pt-24'>
          <h1 className='mx-10 pt-6 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans'>Projects</h1>
          <ProjectComponent />
          <a href="https://www.github.com/JRichm/" target='_blank' className='mx-12 mt-6 px-4 py-1 w-fit text-lg'>See all projects →</a>
        </div>

        {/* Skills Section */}  
        <div className='bg-gray-100 pt-24'>
          <h1 className='mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans'>Skills</h1>
          <div className='pb-12'>
            <SkillComponent /> 
          </div>
        </div>

        {/* About Section */}
        <div className='bg-gray-100 pt-24'>
          <h1 className='mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans'>About</h1>
          <div className='grid grid-cols-2 p-12'>
            <div className='flex flex-col gap-8'>
              <p className='w-[400px]'>&emsp;&emsp;👋 Hey there! I'm James, a passionate full-stack developer based in Sandy, Utah. Solving coding puzzles is my forte, and I take pride in turning complex challenges into elegant solutions.</p>
              <p className='w-[400px]'>&emsp;&emsp;🚀 In my coding journey, I've successfully developed and deployed a range of projects. One that I'm particularly proud of is ArtistLinq, where I fully implemented user authorization. This experience taught me the importance of effective collaboration and the thrill of achieving ambitious goals together.</p>
            </div>
            <div className='flex flex-col gap-8'>
              <p className='w-[400px]'>&emsp;&emsp;🤝 I thrive in collaborative environments and believe in the power of seamless user experiences. Whether it's enhancing productivity, improving accessibility, or fostering creativity, I find inspiration in projects that make a positive impact.</p>
              <p className='w-[400px]'>&emsp;&emsp;🎸 When I'm not immersed in code, you'll likely find me strumming my guitar or catching some waves at the beach. Surprising as it may seem, my love for music and the ocean often intertwines with my coding adventures. I've even crafted a music recommendation app inspired by my eclectic taste!</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='bg-gray-100 pt-24'>
          <h1 className='mx-10 pb-6 tracking-tighter text-4xl font-bold font-nunito_sans'>Contact</h1>
          <ContactComponent />
        </div>
      </div>
    </main>
  )
}
