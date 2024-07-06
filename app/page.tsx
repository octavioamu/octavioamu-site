import { Metadata } from "next";
import CompaniesLogos from "./components/CompaniesLogos";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import Header from "./components/ui/Header";
import jobList from "./data/jobData";
import projects from "./data/projectData";

export const metadata: Metadata = {
  title: "Octavio Amuchástegui CV 2024",
};

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="bg-orange-100 box-shape py-28 px-3 lg:p-20">
        <div className=" 2xl:w-8/12 m-auto  flex-col lg:flex-row items-center gap-14 flex-nowrap grid grid-cols-1 lg:grid-cols-2">
          <div className="text-2xl leading-9 font-bold space-y-3">
            <p>
              I&apos;m a creative developer lately working with web3 and all
              kind of technology.
            </p>
            <p>
              I wrote my first HTML in 2002 and, what once looked like a hobby
              became my passion, and then my profession. Worked in many
              companies and projects, today my focus is on web3 creating DApps
              with amazing experiences.
            </p>
          </div>
          <div className="">
            <div className="worklet-canvas flex-shrink-0 "></div>
            <div className="mt-3 text-sm italic">
              Bauhaus generative css art with houdini
            </div>
          </div>
        </div>
      </div>

      <section className="my-20">
        <CompaniesLogos />
      </section>

      <section className="container mx-auto mb-20">
        <h2 className="text-4xl">Lastest projects</h2>
        <p className="text-lg">Some of my last work and projects.</p>
        <div className="grid gap-8 mb-8">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      <section className="container mx-auto mb-20">
        <div className="mb-8">
          <h2 className="text-4xl">Career Timeline</h2>
          <p className="text-lg">My job history</p>
        </div>
        <Timeline jobList={jobList} />
      </section>
    </main>
  );
}
