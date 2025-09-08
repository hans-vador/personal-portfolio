import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Play } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="ml-2 mr-8 flex items-center space-x-2 px-2 py-1" href="/">
              <span className="hidden font-bold sm:inline-block text-primary">Portfolio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-primary">
                About
              </a>
              <a href="#projects" className="transition-colors hover:text-primary">
                Projects
              </a>
              <a href="#media" className="transition-colors hover:text-primary">
                Media
              </a>
              <a href="#contact" className="transition-colors hover:text-primary">
                Contact
              </a>
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
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/20"></div>
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
              <a href="#projects">
                <Play className="mr-2 h-4 w-4" />
                View Work
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-1 mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          <p className="text-muted-foreground text-lg text-pretty">
            I'm a currently a student at The University of Michigan, where I'm studying Computer Science and Mechanical
            Engineering. I'm interested in the intersection of technology and design, and I'm always looking for new
            ways to combine the two.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-16 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Summer 2025 Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              An in-depth look at my latest project, showcasing the complete design and development process.
            </p>
          </div>

          {/* Project Hero */}
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/work/IMG_2445.JPG"
                  alt="Volume Control project preview"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-start justify-center pt-6 sm:pt-8">
                  <div className="text-center space-y-3 text-white bg-black/40 backdrop-blur-sm px-4 py-3 rounded-md mx-4">
                    <h3 className="text-2xl font-bold">Volume Control</h3>
                    <p className="max-w-md mx-auto text-sm sm:text-base opacity-90">
                      An IoT-based speaker control system for remote volume adjustment.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Details */}
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <p className="text-muted-foreground text-pretty">
                  As a lazy teenager the last thing I want to do when brainrotting on my bed is get up, but how am I
                  going to turn up the Drake playing in my room? The over engineered solution is a building a robot,
                  which is exactly what I did.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">IDE</Badge>
                  <Badge variant="secondary">Arduino R4 Wifi</Badge>
                  <Badge variant="secondary">SolidWorks</Badge>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/hans-vador" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">My Process</h3>
                <p className="text-muted-foreground text-pretty">
                  The process of building the robot was a lot of trial and error. Starting with salvaging parts from an
                  old toy drone I ran into countless issues both in my hardware, software, and design. With multiple
                  iterations and improvements with each one I eventually had a fully working product. All of my design
                  versions are below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Real time volume control &lt;30ms delay</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Fully functional backend and front end system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Implemented responsive user interface for volume control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process & Iterations */}
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Project Evolution</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Follow the evolution of my project through 4 major versions, each representing significant improvements
                and iterations.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-12">
              {[
                {
                  version: "Version 1.0",
                  title: "Initial Concept & Prototype",
                  description:
                    "The first working prototype with basic functionality. Using salvaged parts from a toy drone, I built the foundation for remote volume control with Arduino and basic mechanical components. However there are is no remote control and direction, duration, and PWM values must manually be inputted.",
                  highlights: [
                    "Basic volume control mechanism",
                    "Initial Arduino setup",
                    "Simple mechanical design using H-Bridge",
                  ],
                  media: [
                    { type: "image", src: "/work/IMG_2210.JPG", title: "Salvaged Drone Motor & Gear Assembly" },
                    { type: "image", src: "/work/IMG_2214.JPG", title: "Custom Volume Knob Holder Design" },
                    { type: "video", src: "/work/IMG_2217.MOV", title: "Initial Test Setup & Wiring" },
                    { type: "video", src: "/work/IMG_2220.MOV", title: "First Successful Volume Control Test" },
                    { type: "video", src: "/work/IMG_2221.MOV", title: "Bird's Eye View of Prototype Operation" },
                  ],
                },
                {
                  version: "Version 2.0",
                  title: "Remote Control",
                  description:
                    "Using HTML I was able to host a simple web app off the Arduino which could send requests to change the volume. While not visually pretty or functional it allowed to test the Wifi functions of the Arduino R4. However I quickly found the web app to be quite laggy and responsive enough.",
                  highlights: ["Remote Control", "HTML Webapp"],
                  media: [
                    { type: "video", src: "/work/IMG_2227.MOV", title: "Test #2 Setup" },
                    { type: "video", src: "/work/IMG_2223.MOV", title: "Test #2" },
                  ],
                },
                {
                  version: "Version 3.0",
                  title: "Failed Design",
                  description:
                    "Learning from the past versions I realized that in order to make accurate and fast volume changes I would need to develop a frontend/backend system as well redo the design for a servo. I soon had a new frontend using React.js which was able to send requests to the new backend I developed in IDE. Unfortunately my SolidWorks skills were not up to par and I had some funny fails.",
                  highlights: ["New Backend/Frontend", "React.js", "Failed Center Distance"],
                  media: [
                    { type: "video", src: "/work/IMG_2330.MOV", title: "Backend/Frontend Test" },
                    {
                      type: "image",
                      src: "/work/IMG_2334.JPG",
                      title: "Version 3.0 Design Fail (I forgot to make a hole in the top piece for the servo lmao)",
                    },
                    { type: "image", src: "/work/IMG_2339.JPG", title: "Version 3.0 New Gear and Servo Design" },
                    { type: "video", src: "/work/IMG_2340.MOV", title: "Gear Center Distance Fail" },
                  ],
                },
                {
                  version: "Version 4.0",
                  title: "Final Working Design and Polishes",
                  description:
                    "The final and working version with sub-30ms response times and polished user experience. After learning from all my mistakes I was finally able to make friction-hold design with a working gear system.",
                  highlights: [
                    "Working Gear System",
                    "Friction Hold Design",
                    "Fully Working and Optimized Frontend/Backend System",
                  ],
                  media: [
                    { type: "image", src: "/work/IMG_2444.JPG", title: "Front View of Final Design" },
                    { type: "image", src: "/work/IMG_2442.JPG", title: "Bird's Eye View of Final Design" },
                    { type: "video", src: "/work/IMG_2436.MOV", title: "Final Test Setup" },
                    { type: "video", src: "/work/IMG_2437.MOV", title: "Final Test #1" },
                    { type: "video", src: "/work/IMG_2439.MOV", title: "Final Test #2" },
                  ],
                },
              ].map((version, i) => (
                <div key={i} className="space-y-6">
                  <div className="text-center space-y-2">
                    <Badge variant="outline" className="text-sm px-3 py-1">
                      {version.version}
                    </Badge>
                    <h4 className="text-xl font-bold">{version.title}</h4>
                    <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">{version.description}</p>
                  </div>

                  {/* Key Highlights */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {version.highlights.map((highlight, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {version.media.map((m, idx) => (
                      <Card key={idx} className="group overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative aspect-[4/5] bg-muted flex items-center justify-center">
                          {m.type === "image" ? (
                            <Image
                              src={m.src || "/placeholder.svg"}
                              alt={m.title}
                              fill
                              className="object-contain p-2"
                            />
                          ) : (
                            <video src={m.src} className="w-full h-full object-contain p-2" controls playsInline />
                          )}
                          <div className="absolute top-2 right-2">
                            <div
                              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border"
                              style={{
                                backgroundColor: m.type === "video" ? "#0f172a" : "#ffffff",
                                color: m.type === "video" ? "#ffffff" : "#0f172a",
                                borderColor: m.type === "video" ? "#334155" : "#cbd5e1",
                              }}
                            >
                              {m.type}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-3">
                          <p className="text-sm font-medium leading-tight text-center">{m.title}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Separator line except for last version */}
                  {i < 3 && (
                    <div className="flex items-center justify-center pt-8">
                      <div className="w-24 h-px bg-border"></div>
                      <div className="mx-4 w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-24 h-px bg-border"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-muted/50 py-16">
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

      {/* Media Section */}
      <section id="media" className="container px-4 py-16 mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Media Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Creative projects and visual content showcasing my media production skills.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative aspect-square bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1Ly_wOraeMngsvn84HUS9JUvyoEyUPdTg/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Media Project 1"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
              >
                <p className="font-medium" style={{ color: "#1f2937" }}>
                  Featured Video Project
                </p>
              </div>
            </div>
            {[2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative aspect-square bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <Play className="h-12 w-12 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                >
                  <p className="font-medium" style={{ color: "#1f2937" }}>
                    Media Project {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-16">
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
