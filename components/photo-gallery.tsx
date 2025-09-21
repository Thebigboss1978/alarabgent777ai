"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, Download, Eye } from "lucide-react"

const galleryCategories = [
  { id: "all", name: "All Photos", count: 2547 },
  { id: "pyramids", name: "Pyramids", count: 892 },
  { id: "desert", name: "Desert Adventures", count: 634 },
  { id: "culture", name: "Cultural Sites", count: 456 },
  { id: "people", name: "Happy Travelers", count: 565 },
]

const galleryImages = [
  {
    id: 1,
    src: "/great-pyramid-of-giza-at-sunset-with-golden-light.jpg",
    title: "Great Pyramid at Sunset",
    category: "pyramids",
    likes: 1247,
    description: "The magnificent Great Pyramid bathed in golden sunset light",
  },
  {
    id: 2,
    src: "/camel-caravan-crossing-desert-dunes-at-sunrise.jpg",
    title: "Desert Camel Caravan",
    category: "desert",
    likes: 892,
    description: "Traditional camel caravan crossing the golden dunes",
  },
  {
    id: 3,
    src: "/happy-family-posing-in-front-of-sphinx.jpg",
    title: "Family Adventure",
    category: "people",
    likes: 756,
    description: "Joyful family creating memories at the Sphinx",
  },
  {
    id: 4,
    src: "/ancient-egyptian-hieroglyphs-on-temple-walls.jpg",
    title: "Ancient Hieroglyphs",
    category: "culture",
    likes: 634,
    description: "Intricate hieroglyphs telling stories of ancient Egypt",
  },
  {
    id: 5,
    src: "/desert-buggy-adventure-with-sand-dunes.jpg",
    title: "Buggy Adventure",
    category: "desert",
    likes: 523,
    description: "Thrilling desert buggy expedition through the dunes",
  },
  {
    id: 6,
    src: "/step-pyramid-of-saqqara-archaeological-site.jpg",
    title: "Step Pyramid of Saqqara",
    category: "pyramids",
    likes: 445,
    description: "The ancient Step Pyramid, Egypt's first pyramid",
  },
  {
    id: 7,
    src: "/traditional-egyptian-feast-with-local-cuisine.jpg",
    title: "Egyptian Cuisine",
    category: "culture",
    likes: 389,
    description: "Authentic Egyptian feast with traditional dishes",
  },
  {
    id: 8,
    src: "/couple-on-horseback-riding-near-pyramids.jpg",
    title: "Romantic Horse Ride",
    category: "people",
    likes: 678,
    description: "Romantic horseback adventure with pyramid backdrop",
  },
  {
    id: 9,
    src: "/sound-and-light-show-at-giza-pyramids-at-night.jpg",
    title: "Sound & Light Show",
    category: "pyramids",
    likes: 834,
    description: "Spectacular nighttime illumination of the pyramids",
  },
]

export function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const toggleLike = (imageId: number) => {
    const newLiked = new Set(likedImages)
    if (newLiked.has(imageId)) {
      newLiked.delete(imageId)
    } else {
      newLiked.add(imageId)
    }
    setLikedImages(newLiked)
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our stunning collection of Egyptian adventures captured by professional photographers and
            happy travelers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              }
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-muted text-muted-foreground">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-black/50 hover:bg-black/70 text-white border-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 text-card-foreground">{image.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{image.description}</p>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLike(image.id)}
                    className={`p-0 h-auto ${likedImages.has(image.id) ? "text-red-500" : "text-muted-foreground"}`}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${likedImages.has(image.id) ? "fill-current" : ""}`} />
                    <span>{image.likes + (likedImages.has(image.id) ? 1 : 0)}</span>
                  </Button>

                  <Badge variant="outline" className="text-xs">
                    {galleryCategories.find((cat) => cat.id === image.category)?.name}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Load More Photos
          </Button>
        </div>
      </div>
    </section>
  )
}
