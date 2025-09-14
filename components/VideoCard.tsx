"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  description: string
  videoUrl: string
  thumbnailUrl?: string
  date?: string
  duration?: string
  tags?: string[]
  featured?: boolean
}

export function VideoCard({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  featured = false,
}: VideoCardProps) {
  const isDrive = typeof videoUrl === 'string' && videoUrl.includes('drive.google.com')
  const isYouTube = typeof videoUrl === 'string' && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'))
  const isDirectVideo = typeof videoUrl === 'string' && (videoUrl.endsWith('.mp4') || videoUrl.startsWith('/'))

  const toYouTubeEmbed = (url: string) => {
    try {
      if (url.includes('youtu.be')) {
        const id = url.split('youtu.be/')[1].split(/[?&]/)[0]
        return `https://www.youtube.com/embed/${id}`
      }
      const u = new URL(url)
      const params = new URLSearchParams(u.search)
      const id = params.get('v')
      return id ? `https://www.youtube.com/embed/${id}` : url
    } catch (e) {
      return url
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative bg-muted/30 aspect-video flex items-center justify-center">
        {isDrive || isYouTube ? (
          <iframe
            src={isYouTube ? toYouTubeEmbed(videoUrl) : videoUrl}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : isDirectVideo ? (
          <video
            src={videoUrl}
            controls
            playsInline
            poster={thumbnailUrl}
            className="w-full h-full object-cover"
          />
        ) : (
          // fallback: keep original play button linking out
          <div className="relative inset-0 flex items-center justify-center">
            <Button asChild size="lg" variant="outline">
              <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Open Video
              </a>
            </Button>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </CardContent>
    </Card>
  )
}
