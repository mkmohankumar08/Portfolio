"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SkillBar } from "@/components/ui/skill-bar"

const technicalSkills = [
  { name: "JavaScript", level: 80 },
  { name: "React/Next.js", level: 85 },
  // { name: "Node.js/Express", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "UI/UX Design", level: 75 },
  // { name: "Database Management", level: 70 },
]

const softSkills = [
  { name: "Problem Solving", level: 90 },
  { name: "Communication", level: 85 },
  { name: "Teamwork", level: 95 },
  { name: "Adaptability", level: 80 },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here's an overview of my technical and soft skills.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Technologies</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[
                  "JavaScript", "React", "Next.js", "MongoDB", "Python",
                  "HTML5", "CSS3", "Tailwind CSS", "Git","Figma","Illustrator"
                ].map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center justify-center rounded-lg bg-card p-4 text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}