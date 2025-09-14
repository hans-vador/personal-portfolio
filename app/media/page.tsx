"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, Grid, List, Play, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import { VideoCard } from "@/components/VideoCard"
import React from "react"
import { PhotoAlbumCard } from "@/components/PhotoAlbumCard"
import {
  videoProjects,
  photoAlbums,
  getAllVideoCategories,
  getAllAlbumCategories,
  type VideoProject,
  type PhotoAlbum
} from "@/lib/media-data"
import { useState } from "react"

export default function MediaPage() {
  const [selectedVideoCategory, setSelectedVideoCategory] = useState<string>("all")
  const [selectedAlbumCategory, setSelectedAlbumCategory] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const videoCategories = ["all", ...getAllVideoCategories()]
  const albumCategories = ["all", ...getAllAlbumCategories()]

  const filteredVideos = selectedVideoCategory === "all"
    ? videoProjects
    : videoProjects.filter(video => video.category === selectedVideoCategory)

  const filteredAlbums = selectedAlbumCategory === "all"
    ? photoAlbums
    : photoAlbums.filter(album => album.category === selectedAlbumCategory)

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
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">Media Work</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Creative projects and visual content showcasing my media production skills across video and photography.
            </p>
          </div>

          {/* Video Projects Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Play className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Video Projects</h2>
                <Badge variant="outline" className="text-xs">
                  {filteredVideos.length} projects
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                {/* Video Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={selectedVideoCategory}
                    onChange={(e) => setSelectedVideoCategory(e.target.value)}
                    className="px-3 py-1 border border-input bg-background rounded-md text-sm"
                  >
                    {videoCategories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Videos" : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            {filteredVideos.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    title={video.title}
                    description={video.description}
                    videoUrl={video.videoUrl}
                    duration={video.duration}
                    tags={video.tags}
                    featured={video.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="space-y-2">
                  <Play className="h-12 w-12 text-muted-foreground mx-auto" />
                  <h3 className="text-lg font-medium">No videos found</h3>
                  <p className="text-muted-foreground">
                    {selectedVideoCategory === "all"
                      ? "No video projects are configured yet."
                      : `No videos found in the ${selectedVideoCategory} category.`}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Photo Albums Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <ImageIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold">Photo Albums</h2>
                <Badge variant="outline" className="text-xs">
                  {filteredAlbums.length} albums
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                {/* Album Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={selectedAlbumCategory}
                    onChange={(e) => setSelectedAlbumCategory(e.target.value)}
                    className="px-3 py-1 border border-input bg-background rounded-md text-sm"
                  >
                    {albumCategories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Albums" : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center border border-input rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Albums Grid */}
            {filteredAlbums.length > 0 ? (
              <div className={`grid gap-6 ${viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3"
                : "grid-cols-1 w-full"
                } items-start`}
                style={{ gap: '1.5rem' }}
              >
                {filteredAlbums.map((album) => (
                  <PhotoAlbumCard
                    key={album.id}
                    id={album.id}
                    title={album.title}
                    description={album.description}
                    albumUrl={album.albumUrl}
                    localPhotos={album.localPhotos}
                    coverImageUrl={album.coverImageUrl}
                    date={album.date}
                    imageCount={album.imageCount}
                    featured={album.featured}
                    category={album.category}
                    className="w-full"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="space-y-2">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                  <h3 className="text-lg font-medium">No albums found</h3>
                  <p className="text-muted-foreground">
                    {selectedAlbumCategory === "all"
                      ? "No photo albums are configured yet."
                      : `No albums found in the ${selectedAlbumCategory} category.`}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Setup Instructions */}
          {(videoProjects.length === 0 || videoProjects.every(video => video.videoUrl.includes('YOUR_VIDEO_ID')) ||
            photoAlbums.length === 0 || photoAlbums.every(album => album.albumUrl.includes('YOUR_ALBUM_URL'))) && (
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Setup Required</h3>
                      <p className="text-muted-foreground">
                        To display your media content, you need to configure your videos and photo albums.
                      </p>
                    </div>
                    <div className="text-left space-y-3 text-sm bg-background p-4 rounded-lg">
                      <div>
                        <p className="font-medium">For Video Projects:</p>
                        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mt-1">
                          <li>Upload your videos to Google Drive</li>
                          <li>Get the shareable link and replace '/view' with '/preview'</li>
                          <li>Update video URLs in <code className="bg-muted px-1 rounded">/lib/media-data.ts</code></li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium">For Photo Albums:</p>
                        <ol className="list-decimal list-inside space-y-1 text-muted-foreground mt-1">
                          <li>Add up to 20 photos to the <code className="bg-muted px-1 rounded">/public/work/</code> directory</li>
                          <li>Update the <code className="bg-muted px-1 rounded">localPhotos</code> array in <code className="bg-muted px-1 rounded">/lib/media-data.ts</code></li>
                          <li>Add your Google Photos album URL for the "View All Photos" link</li>
                          <li>Photos will display in a carousel with thumbnail navigation (first 20 shown)</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-semibold">Interested in booking a session or seeing more?</h3>
            <p className="text-muted-foreground mt-2">Contact me for rates, availability, or a detailed portfolio walkthrough.</p>
            <div className="mt-4">
              <Button asChild>
                <a href="mailto:hvador@umich.edu">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
