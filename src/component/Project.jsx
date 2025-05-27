import image3 from "/public/cyber-chall.jpg";
import image4 from "/public/capstoneee.jpg";

import { motion } from "framer-motion";
import Starfield from 'react-starfield';

const projectsData = [
  {
    image: image3,
    title: "Black Ops - Secret Sabotage",
    description: "At Louisiana Tech we have a anual cyberstorm every year and my group had to create a challenge for the event. Cyberstorm is a full-day cybersecurity competition. Heres our project overview: Challengers receive intel about a secret research lab. Department of Defense needs someone to investigate the lab's operations. The key lies in a passphrase, a cryptographic salt, and a timezone offset.",
    technologies: ["Html", "Css", "Javascript", "docker", "python", "SQL"],

  },

  {
    image: image4,
    title: "ServeWell",
    description: " ServeWell is a church management software specifically designed for small churches. Small churches need to be efficient with their money, their time, and their overall resources because those resources are scarce and dwindling.      https://github.com/hayleyowen/ServeWell/wiki            ",
    technologies: ["Next.js","React", "tailwind-css", "Typescript", "docker", "Digital Ocean", "SQL", "Auth0"],

  },
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.5}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard= ({ project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[600px]" />

        <div className="flex flex-col gap-5">

          <div className="flex flex-col gap-3">
        
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">{tech}</span>
            ))}
          </div>
          
        </div>

    </div>
    </ScrollReveal>
  )
}

{/*starfield*/}
const Project = () => {
  return (
    <div id="project" className="relative flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 mmd:px-14 md:py-24">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <h1 className="text-4xl font-light text-white md:text-6x1">My Projects</h1>


      <ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-52 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </ScrollReveal>
    </div>
  )
}

export default Project