'use client'

import { Music, PencilRuler, Guitar, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const hobbies = [
  {
    title: 'Drawing',
    icon: <PencilRuler className="w-6 h-6 text-pink-500" />,
    description: 'I love creating digital art, and occasionally swap out my iPad with a regular pencil, paper, watercolors, and colored pencils as well!',
  },
  {
    title: 'Electric Guitar',
    icon: <Guitar className="w-6 h-6 text-yellow-500" />,
    description: 'I started teaching myself the guitar in senior year of high school. I like learning iconic guitar solos, as well as the classic Taylor Swift and Coldplay!',
  },
  {
    title: 'Indian Classical Music',
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    description: 'I’ve been trained in Carnatic vocal music since I was eight years old. It\'s been a stable way of connecting me with my culture, no matter where I go.',
  },
  {
    title: 'Piano',
    icon: <Music className="w-6 h-6 text-blue-500" />,
    description: 'A childhood love I’m revisiting - I mostly play whatever strikes my curiosity in the moment. I\'ve recently finished up Arabesque by Debussy.',
  },
]

const Fun = () => {
  return (
    <section id="fun" className="max-w-7xl mx-auto px-6 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold">Just for Fun</h2>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto text-sm">
          Each year of my life I dedicate to learning something new. Here are some of the hobbies I've picked up over the years.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {hobbies.map(({ title, icon, description }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-gray-200 p-6 shadow-sm transition-all bg-white hover:bg-gray-50"
          >
            <div className="flex items-center gap-3 mb-3">
              {icon}
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Fun
