"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Download, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RoboticArmProject() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-5 flex h-14 items-center">
          <div className="hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/projects" className="transition-colors hover:text-primary font-semibold text-primary">
                Projects
              </Link>
              <Link href="/media" className="transition-colors hover:text-primary">
                Media
              </Link>
            </nav>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Project Detail */}
      <section className="container px-4 py-16 mx-auto">
        <div className="space-y-12">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Project Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter">Robotic Arm</h1>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              In Progress
            </Badge>
            <div className="max-w-md mx-auto">
              <div className="relative w-full aspect-video rounded-lg bg-muted/40 flex items-center justify-center border">
                <span className="text-muted-foreground font-medium">Work in progress</span>
              </div>
            </div>
          </div>

          {/* Project Info - Overview Only */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
              <p className="text-muted-foreground text-pretty">
                Constructing a robotic system capable of completing various fine motor objectives autonomously from
                simple user prompts. This project combines advanced computer vision with precise mechanical control to
                create an intelligent robotic assistant.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Arduino R4 Wifi</Badge>
                <Badge variant="secondary">IDE</Badge>
                <Badge variant="secondary">YOLO</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">SolidWorks</Badge>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              <Button disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/hans-vador" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
