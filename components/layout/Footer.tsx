import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="https://github.com" className="text-muted-foreground hover:text-foreground" target="_blank">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link href="linkedin.com/in/balamurugan-s-80a3632a4" className="text-muted-foreground hover:text-foreground" target="_blank">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          {/* <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground" target="_blank">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link> */}
          <Link href="mailto:mkmohankumar0812@gmail.com" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Balamurugan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}