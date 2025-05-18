'use client'

import ProjectCard from './ui/project-card'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-2">Projects</h2>
      <p className="text-center text-gray-500 mb-10">
        Here are some of the projects I&apos;ve worked on.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ProjectCard
          title="Due"
          description="A platform that allows teachers to bring AI into their classrooms to transform homework into a dynamic and engaging learning experience, avoiding the black-box of LLMs."
          tech={['React', 'Next.js', 'Supabase']}
          codeLink="https://github.com/kristiiwuu/mvp"
          demoLink="https://due-nine.vercel.app/"
          imageSrc='/due.jpeg'
        />
        <ProjectCard
          title="Clique"
          description="A brief description of your second project. What technologies did you use? What problems did it solve?"
          tech={['Swift', 'Firebase']}
          codeLink="https://github.com/amrita-arun/CliqueSwift"
          demoLink=""
        />
        <ProjectCard
          title="Code Comparison Tool"
          description="A brief description of your third project. What technologies did you use? What problems did it solve?"
          tech={['Python', 'React', 'Next.js']}
          codeLink="https://github.com/amrita-arun/CodeComparison"
          demoLink="https://code-comparison.vercel.app/"
          imageSrc='/code-comparison.jpeg'
        />
      </motion.div>
    </section>
  )
}

export default Projects
