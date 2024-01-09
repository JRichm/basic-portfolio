import ProjectComponent from "../components/projectComponent"
import SubHeader from "../components/subHeader"

export default function ProjectsPage() {
  return (
    <main className="flex flex-col bg-gray-100">
      <div className="w-[1000px] max-w-screen self-center pb-36">
        <div>
          <SubHeader />
        </div>
        <div>
            <ProjectComponent />
        </div>
      </div>
    </main>
  )
}
