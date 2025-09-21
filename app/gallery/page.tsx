import { Navigation } from "@/components/navigation"
import { GalleryHero } from "@/components/gallery-hero"
import { PhotoGallery } from "@/components/photo-gallery"
import { VideoSection } from "@/components/video-section"
import { TestimonialsGallery } from "@/components/testimonials-gallery"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <PhotoGallery />
      <VideoSection />
      <TestimonialsGallery />
    </main>
  )
}
