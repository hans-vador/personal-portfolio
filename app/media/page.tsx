"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Play } from "lucide-react"
import Link from "next/link"

export default function MediaPage() {
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
              <Link href="/projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="/media" className="transition-colors hover:text-primary font-semibold text-primary">
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

      {/* Media Section */}
      <section className="container px-4 py-16 mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">Media Work</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Creative projects and visual content showcasing my media production skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-video bg-muted/30">
                <iframe
                  src="https://drive.google.com/file/d/1Ly_wOraeMngsvn84HUS9JUvyoEyUPdTg/preview"
                  className="w-full h-full p-2"
                  allow="autoplay"
                  title="Featured Video Project"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Featured Video Project</h4>
                <p className="text-sm text-muted-foreground">
                  Professional videography showcasing dynamic storytelling and technical expertise
                </p>
              </CardContent>
            </Card>

            {[
              {
                title: "Brand Identity Campaign",
                desc: "Complete visual identity development for emerging tech startup",
              },
              { title: "Event Documentation", desc: "Comprehensive coverage of corporate events and conferences" },
              { title: "Product Showcase", desc: "High-impact product photography with creative lighting techniques" },
              { title: "Social Media Content", desc: "Engaging short-form content optimized for digital platforms" },
              { title: "Promotional Materials", desc: "Marketing collateral design for various client campaigns" },
            ].map((project, i) => (
              <Card key={i} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video bg-muted/30 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Play className="h-8 w-8 text-primary/60 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-xs text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
