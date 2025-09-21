"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Eye } from "lucide-react"

const featuredVideos = [
  {
    id: 1,
    title: "Complete Pyramid Tour Experience",
    thumbnail: "/pyramid-tour-video-thumbnail-with-play-button.jpg",
    duration: "12:45",
    views: "25.3K",
    description: "Join us on a complete journey through the Giza pyramid complex",
  },
  {
    id: 2,
    title: "Desert Safari Adventure",
    thumbnail: "/desert-camel-safari-video-thumbnail.jpg",
    duration: "8:32",
    views: "18.7K",
    description: "Experience the magic of desert camel riding at sunset",
  },
  {
    id: 3,
    title: "Sound & Light Show Spectacular",
    thumbnail: "/pyramid-light-show-video-thumbnail-at-night.jpg",
    duration: "6:18",
    views: "31.2K",
    description: "Witness the breathtaking sound and light show at the pyramids",
  },
]

export function VideoSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Video Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our immersive video collection showcasing the beauty and excitement of Egyptian adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <Card
              key={video.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-16 h-16 p-0 group-hover:scale-110 transition-transform duration-300"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{video.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{video.views} views</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Watch Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Subscribe to Our Channel</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest videos of Egyptian adventures, travel tips, and behind-the-scenes content delivered
              straight to your feed.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white mr-4">
              Subscribe on YouTube
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
