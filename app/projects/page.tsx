"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "volume-control",
      title: "Volume Control",
      status: "Completed",
      date: "July 2025 – September 2025",
      description: "An IoT-based speaker control system for remote volume adjustment with sub-30ms response times.",
      technologies: ["React", "Arduino R4 Wifi", "IDE", "SolidWorks"],
      image: "/work/IMG_2445.JPG",
      isCompleted: true,
    },
    {
      id: "robotic-arm",
      title: "Robotic Arm",
      status: "In Progress",
      date: "September 2025 – Present",
      description:
        "Constructing a robotic system capable of completing various fine motor objectives autonomously from simple user prompts.",
      technologies: ["Arduino R4 Wifi", "IDE", "YOLO", "C++", "SolidWorks"],
      image: "/robotic-arm-with-servo-motors-and-camera.jpg",
      isCompleted: false,
    },
  ]

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

      {/* Projects Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">My Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore my engineering projects, from completed systems to ongoing developments in robotics and IoT.
            </p>
          </div>

          {/* Project Cards */}
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video">
                  {project.id === "robotic-arm" ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/40 border-t">
                      <span className="text-muted-foreground font-medium">Work in progress</span>
                    </div>
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={project.isCompleted ? "default" : "secondary"}
                      className={project.isCompleted ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.date}</span>
                    </div>
                    <p className="text-muted-foreground text-pretty">{project.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/projects/${project.id}`}>
                      View Full Process
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
