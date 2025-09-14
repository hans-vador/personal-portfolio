"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

interface PhotoCarouselProps {
  photos: string[]
  title: string
  albumUrl?: string
  className?: string
}

export function PhotoCarousel({ photos = [], title, className = "" }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => setCurrentIndex((p) => (p - 1 + photos.length) % photos.length)
  const goToNext = () => setCurrentIndex((p) => (p + 1) % photos.length)
  const goToSlide = (i: number) => setCurrentIndex(i)

  if (photos.length === 0) {
    return (
      <div className={`aspect-video bg-muted/30 flex items-center justify-center ${className}`}>
        <p className="text-muted-foreground">No photos available</p>
      </div>
    )
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Main Photo Display */}
      <div className="relative bg-muted/30 overflow-hidden rounded-t-lg border border-border/50 shadow-sm flex items-center justify-center min-h-[360px] md:min-h-[420px]">
        <img
          src={photos[currentIndex]}
          alt={`${title} - Photo ${currentIndex + 1}`}
          className="max-h-[640px] w-auto object-contain transition-all duration-500"
          onError={(e) => {
            const t = e.target as HTMLImageElement
            t.src = "/placeholder.jpg"
          }}
        />
      </div>

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80"
            onClick={goToPrevious}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/80"
            onClick={goToNext}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Photo Counter */}
      {photos.length > 1 && (
        <div className="absolute bottom-3 left-3 bg-background/90 px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 shadow-sm">
          {currentIndex + 1} / {photos.length}
        </div>
      )}

      {/* Fullscreen Button */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Button
          size="sm"
          className="bg-background/90 hover:bg-background text-foreground border-border/50"
          onClick={() => {
            const img = new Image()
            img.src = photos[currentIndex]
            img.style.maxWidth = "100vw"
            img.style.maxHeight = "100vh"
            img.style.objectFit = "contain"

            const fullscreenDiv = document.createElement("div")
            fullscreenDiv.style.position = "fixed"
            fullscreenDiv.style.top = "0"
            fullscreenDiv.style.left = "0"
            fullscreenDiv.style.width = "100vw"
            fullscreenDiv.style.height = "100vh"
            fullscreenDiv.style.backgroundColor = "rgba(0,0,0,0.9)"
            fullscreenDiv.style.display = "flex"
            fullscreenDiv.style.alignItems = "center"
            fullscreenDiv.style.justifyContent = "center"
            fullscreenDiv.style.zIndex = "9999"
            fullscreenDiv.style.cursor = "pointer"

            fullscreenDiv.appendChild(img)
            document.body.appendChild(fullscreenDiv)

            const cleanup = () => {
              if (document.body.contains(fullscreenDiv)) document.body.removeChild(fullscreenDiv)
            }

            fullscreenDiv.addEventListener("click", cleanup)
          }}
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnail Navigation */}
      {photos.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {photos.slice(0, 20).map((photo, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${idx === currentIndex
                ? "border-primary ring-2 ring-primary/20"
                : "border-border/50 hover:border-primary/50"
                }`}
              aria-label={`Go to photo ${idx + 1}`}
            >
              <img
                src={photo}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.src = "/placeholder.jpg"
                }}
              />
            </button>
          ))}
          {photos.length > 20 && (
            <div className="flex-shrink-0 w-20 h-16 rounded-lg bg-muted/50 flex items-center justify-center text-xs text-muted-foreground border border-dashed border-border/50">
              +{photos.length - 20}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
