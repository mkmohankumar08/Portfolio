"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <div className="relative h-[400px] w-[320px] overflow-hidden rounded-xl sm:h-[500px] sm:w-[400px]">
              <Image
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="John Doe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 320px, 400px"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                My name is Balamurugan, and I have completed my Master of Computer Applications (MCA). With a strong foundation in software development and problem-solving, I have dedicated myself to building efficient and user-friendly web applications. My passion for technology drives me to stay updated with the latest trends and continuously improve my skills.
              </p>
              <p>
              I have Over the year of hands-on experience as a Web Developer, where I worked on various frontend and backend tasks. I specialize in React.js and Next.js, using these frameworks to develop dynamic, high-performance web applications. My experience includes working in collaborative environments, delivering clean code, and meeting project deadlines effectively.
              </p>
              <p>
                In addition to web development, I have also designed intuitive and visually appealing UI/UX for mobile applications. My design approach focuses on creating seamless user experiences that align with modern design principles. I enjoy combining creativity with functionality to deliver user interfaces that are both engaging and easy to use.


              </p>
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="rounded-full" asChild>
                <a href="/Balamurugan_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}