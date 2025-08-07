'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin, MailIcon } from 'lucide-react'
// import { FileText } from 'lucide-react'
import Link from 'next/link'

const Bio = () => {
  return (
    <section className="w-full px-8 py-32 max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-24">


      
      {/* Text content */}
      <div className="text-left space-y-6 max-w-xl">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
        Hi, I&apos;m <span className="text-black">Amrita</span>
        </h1>
        <h2 className="text-gray-500 text-xl font-medium">
        I&apos;m a sophomore at the University of Southern California majoring in Computer Science. 
        </h2>

        <p className="text-gray-600">
        My interests lie at the intersection of technology for social good, creativity, and education. Feel free to connect!
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button size="lg" className="bg-pink-600 hover:bg-pink-600 text-white">
            <Mail className="mr-2 h-4 w-4" />
            <Link href="mailto:asarun@usc.edu">Contact Me</Link>
          </Button>
          {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">

            <Button variant="outline" size="lg">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
            </Button>
            </a> */}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 pt-4 text-gray-600">
          <a href="https://github.com/amrita-arun" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-pink-700" />
          </a>
          <a href="https://www.linkedin.com/in/amrita-arun/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-pink-600" />
          </a>
          <a href="mailto:asarun@usc.edu">
            <MailIcon className="w-5 h-5 hover:text-pink-500" />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative w-72 h-72 mb-10 lg:mb-0">
        <div className="w-full h-full rounded-full border-[6px] border-pink-500 shadow-[0_0_60px_rgba(255,0,0,0.2)] overflow-hidden">
            <Image
            src="/headshot.jpeg"
            alt="Profile"
            width={288}
            height={288}
            className="object-cover w-full h-full"
            />
        </div>
        </div>

    </section>
  )
}

export default Bio
