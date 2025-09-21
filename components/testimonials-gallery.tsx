"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote, Heart } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "David Chen",
    location: "Singapore",
    rating: 5,
    text: "Absolutely incredible experience! The pyramid tour was mind-blowing and our guide was so knowledgeable. The photos we got are once-in-a-lifetime shots.",
    image: "/placeholder.svg?height=60&width=60",
    tour: "Pyramid Explorer",
  },
  {
    id: 2,
    name: "Maria Santos",
    location: "Brazil",
    rating: 5,
    text: "The camel safari at sunset was magical! I felt like I was in a movie. The guides were professional and made sure we felt safe throughout the adventure.",
    image: "/placeholder.svg?height=60&width=60",
    tour: "Desert Safari",
  },
  {
    id: 3,
    name: "James Wilson",
    location: "Australia",
    rating: 5,
    text: "Best tour company in Egypt! The complete package was worth every penny. From pyramids to desert adventures, everything was perfectly organized.",
    image: "/placeholder.svg?height=60&width=60",
    tour: "Complete Experience",
  },
]

export function TestimonialsGallery() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Traveler Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from adventurers who have experienced the magic of Egypt with AlArab Club 777.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
                <span className="ml-2 text-sm text-primary font-medium">{testimonial.tour}</span>
              </div>

              <div className="relative">
                <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-4">{testimonial.text}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span>Verified Review</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
