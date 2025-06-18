"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_65%)]" />
      
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Hi, I'm</span>{" "}
            <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Balamurugan
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            A passionate <span className="font-medium text-foreground">Web Developer</span> creating elegant solutions to complex problems. Specializing in modern web technologies.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="#contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <Link href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium text-muted-foreground">Scroll Down</span>
          <ArrowDown className="h-6 w-6 text-primary" />
        </Link>
      </div>
    </section>
  )
}