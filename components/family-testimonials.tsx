"use client"

import { Button } from "@/components/ui/button"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const familyTestimonials = [
  {
    id: 1,
    name: "Sarah & Mike Johnson",
    location: "California, USA",
    family: "With 3 kids (ages 6, 9, 12)",
    rating: 5,
    text: "AlArab Club 777 made our family dream trip to Egypt absolutely perfect! The guides were amazing with our kids, keeping them engaged and excited throughout the entire tour. The safety measures gave us complete peace of mind.",
    image: "/happy-family-photo-at-pyramids.jpg",
  },
  {
    id: 2,
    name: "Emma Thompson",
    location: "London, UK",
    family: "Single mom with 2 children",
    rating: 5,
    text: "As a single mom traveling with my 7 and 10-year-old, I was nervous about visiting Egypt. The team made everything so easy and safe. My kids still talk about riding camels and learning about hieroglyphs!",
    image: "/mother-with-two-children-smiling.jpg",
  },
  {
    id: 3,
    name: "The Rodriguez Family",
    location: "Madrid, Spain",
    family: "Grandparents + parents + 4 kids",
    rating: 5,
    text: "Three generations of our family had the most incredible time! The guides adapted perfectly to our group's needs, from our 4-year-old to grandpa who's 78. Everyone felt included and safe throughout the adventure.",
    image: "/multi-generation-family-group-photo.jpg",
  },
]

export function FamilyTestimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">What Families Say About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read what other families have experienced during their Egyptian adventures with AlArab Club 777.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyTestimonials.map((testimonial) => (
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
                  <p className="text-xs text-primary">{testimonial.family}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                <p className="text-muted-foreground leading-relaxed pl-4">{testimonial.text}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to create your own family memories in Egypt?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Planning Your Family Trip
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Read More Family Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
