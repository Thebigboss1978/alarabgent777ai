"use client"

import { Badge } from "@/components/ui/badge"
import { Camera, Play, Heart, Share2 } from "lucide-react"

export function GalleryHero() {
  return (
    <section className="relative pt-20 pb-16 desert-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Visual Journey Through Egypt
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 golden-text">Gallery of Wonders</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the breathtaking beauty of ancient Egypt through our curated collection of photos,
            videos, and traveler memories from unforgettable adventures.
          </p>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Camera className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">2.5K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Photos</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Play className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">150+</span>
            </div>
            <p className="text-sm text-muted-foreground">Videos</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">50K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Likes</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Share2 className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">10K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Shares</p>
          </div>
        </div>
      </div>
    </section>
  )
}
