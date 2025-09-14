"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { PhotoCarousel } from "@/components/PhotoCarousel"

interface PhotoAlbumCardProps {
  id?: string | number
  title: string
  description?: string
  albumUrl?: string
  localPhotos?: string[]
  coverImageUrl?: string
  date?: string
  imageCount?: number
  tags?: string[]
  featured?: boolean
  category?: string
  className?: string
}

export function PhotoAlbumCard({
  id,
  title,
  description,
  albumUrl,
  localPhotos = [],
  coverImageUrl,
  date,
  imageCount,
  tags = [],
  category,
  featured = false,
  className = "",
}: PhotoAlbumCardProps) {
  const isMichigan =
    (typeof id === "string" && id === "travel-photos-2024") ||
    (typeof title === "string" && title.toLowerCase().includes("michigan"))

  return (
    <Card className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col ${className}`}>
      <PhotoCarousel
        photos={localPhotos.length > 0 ? localPhotos : coverImageUrl ? [coverImageUrl] : ["/placeholder.jpg"]}
        title={title}
        albumUrl={albumUrl}
        className="rounded-t-lg"
      />

      <CardContent className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <h4 className="font-semibold text-lg leading-tight">{title}</h4>
        </div>

        {description && <p className="text-sm text-muted-foreground">{description}</p>}

        <div className="flex items-center justify-end mt-2">
          {/* Only show "View All Photos" for the Michigan album */}
          {albumUrl && isMichigan && (
            <Button variant="outline" size="sm" asChild>
              <a href={albumUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>View All Photos</span>
              </a>
            </Button>
          )}
        </div>

        {/* Tags removed as requested */}
      </CardContent>
    </Card>
  )
}
