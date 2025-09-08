"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-5 flex h-14 items-center">
          <div className="hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="transition-colors hover:text-primary font-semibold text-primary">
                About
              </Link>
              <Link href="/projects" className="transition-colors hover:text-primary">
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

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-primary/20 relative overflow-hidden">
              <Image src="/work/PFP.JPG" alt="Profile picture" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              Hello, I'm <span className="text-primary">Hans Vador</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-pretty">
              A passionate builder and creative professional dedicated to making beautiful and functional experiences
              that make a difference.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button size="lg" asChild>
              <a href="mailto:hvador@umich.edu">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                <Play className="mr-2 h-4 w-4" />
                View Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container px-4 py-1 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-pretty">
            I'm a currently a student at The University of Michigan, where I'm studying Computer Science and Mechanical
            Engineering. I'm interested in the intersection of technology and design, and I'm always looking for new
            ways to combine the two.
          </p>
        </div>
      </section>

      {/* Resume Section */}
      <section className="bg-muted/50 py-16">
        <div className="container px-4 mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Work Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                My professional journey and key accomplishments.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Structural Engineer",
                  company: "Buckeye Vertical",
                  period: "December 2024 – August 2025",
                  bullets: [
                    "Engineered and integrated an autonomous drone system achieving 6th place worldwide at the SUAS competition, specializing in payload delivery and real-time object detection",
                    "Utilized SolidWorks and Onshape to create drone components and optimize battery location for ideal center of mass",
                    "Manufactured various drone parts using 3d-printing including fabricating a fiberglass hood",
                    "Developed and deployed YOLO-based computer vision models on a Jetson Nano to identify and track ground targets with 85% accuracy in real-time flight conditions",
                    "Programmed autonomous flight behaviors using ROS2 for mission planning, path optimization, and object interaction across dynamic course environments",
                    "Configured and tuned Pixhawk flight controller parameters via QGroundControl to synchronize payload motors and optimize propeller thrust profiles",
                  ],
                },
                {
                  title: "Photographer",
                  company: "Being Digital",
                  period: "September 2022 – Present",
                  bullets: [
                    "Capture, edit, and produce high-quality photography and videography for over 50 client projects",
                    "Created multiple promotional videos for various clubs and organizations including Buckeye Vertical",
                    "Leveraged professional media to develop marketing which elevated brand visibility",
                    "Design and deliver media albums tailored to client specifications",
                  ],
                },
              ].map((job, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <Badge variant="outline" className="text-sm">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-4">{job.company}</p>
                    <ul className="space-y-2">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Let's Connect</h2>
              <p className="text-muted-foreground text-lg text-pretty">
                I'm always interested in new opportunities and collaborations.
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <a href="mailto:hvador@umich.edu">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/hansvador/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/hans-vador" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
