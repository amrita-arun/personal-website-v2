'use client'

import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ProjectCardProps = {
  title: string
  description: string
  tech: string[]
  codeLink?: string
  demoLink?: string
  imageSrc?: string
}

const ProjectCard = ({ title, description, tech, codeLink, demoLink, imageSrc }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between border p-4 w-full max-w-sm"
    >
      <div className="w-full h-40 bg-gray-100 rounded-md overflow-hidden mb-4">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} width={400} height={160} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            Coming soon!
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span key={t} className="bg-gray-100 text-sm px-2 py-1 rounded-md font-medium text-gray-700">
            {t}
          </span>
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 border rounded-md text-sm hover:bg-gray-100">
            <Github className="w-4 h-4 mr-2" /> Code
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 border rounded-md text-sm hover:bg-gray-100">
            <ExternalLink className="w-4 h-4 mr-2" /> Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
