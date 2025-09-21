"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Star, Baby, Shield as Child, User } from "lucide-react"

const familyTours = [
  {
    id: "family-pyramid",
    title: "Family Pyramid Discovery",
    icon: "🏛️",
    description:
      "A gentle introduction to the pyramids perfect for families. Interactive storytelling, easy walking paths, and plenty of photo opportunities.",
    duration: "4 hours",
    ageRange: "All ages",
    maxGroup: "Family of 8",
    price: "$35",
    rating: 4.9,
    reviews: 456,
    highlights: [
      "Child-friendly pyramid exploration",
      "Interactive storytelling sessions",
      "Family photo opportunities",
      "Educational activity booklets",
      "Comfortable rest areas",
    ],
    ageIcons: [
      <Baby key="baby" className="h-4 w-4" />,
      <Child key="child" className="h-4 w-4" />,
      <User key="adult" className="h-4 w-4" />,
    ],
  },
  {
    id: "gentle-camel",
    title: "Gentle Camel Experience",
    icon: "🐪",
    description:
      "Safe and comfortable camel rides designed for families. Shorter routes, gentle camels, and experienced handlers ensure everyone enjoys the adventure.",
    duration: "2 hours",
    ageRange: "5+ years",
    maxGroup: "Family of 6",
    price: "$20",
    rating: 4.8,
    reviews: 324,
    highlights: [
      "Gentle, well-trained camels",
      "Safety equipment for all sizes",
      "Short, comfortable routes",
      "Professional handlers",
      "Family group photos",
    ],
    ageIcons: [<Child key="child" className="h-4 w-4" />, <User key="adult" className="h-4 w-4" />],
  },
  {
    id: "educational-tour",
    title: "Educational Egyptian Adventure",
    icon: "📚",
    description:
      "Learn about ancient Egypt through fun, interactive experiences. Perfect for curious minds and school-age children with engaging activities.",
    duration: "5 hours",
    ageRange: "6+ years",
    maxGroup: "Family of 10",
    price: "$45",
    rating: 4.9,
    reviews: 278,
    highlights: [
      "Interactive learning activities",
      "Hieroglyph writing workshop",
      "Ancient Egyptian games",
      "Educational materials included",
      "Quiz and prizes for kids",
    ],
    ageIcons: [<Child key="child" className="h-4 w-4" />, <User key="adult" className="h-4 w-4" />],
  },
  {
    id: "family-complete",
    title: "Complete Family Adventure",
    icon: "👨‍👩‍👧‍👦",
    description:
      "The ultimate family experience combining pyramids, gentle activities, cultural experiences, and traditional Egyptian lunch in a relaxed pace.",
    duration: "Full day",
    ageRange: "All ages",
    maxGroup: "Extended family",
    price: "$85",
    rating: 5.0,
    reviews: 189,
    highlights: [
      "Multi-generational activities",
      "Flexible pacing for all ages",
      "Traditional family-style lunch",
      "Professional family photographer",
      "Souvenir shopping time",
    ],
    ageIcons: [
      <Baby key="baby" className="h-4 w-4" />,
      <Child key="child" className="h-4 w-4" />,
      <User key="adult" className="h-4 w-4" />,
    ],
    popular: true,
  },
]

export function FamilyTours() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Family Tour Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specially designed tours that cater to families with children, ensuring everyone has a safe and memorable
            Egyptian adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {familyTours.map((tour) => (
            <Card
              key={tour.id}
              className={`relative p-6 ${tour.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"} bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300`}
            >
              {tour.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  Most Popular for Families
                </Badge>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{tour.icon}</div>
                <div className="flex gap-1">{tour.ageIcons}</div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{tour.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{tour.description}</p>

              {/* Tour Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>{tour.maxGroup}</span>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="outline" className="text-xs">
                  Ages: {tour.ageRange}
                </Badge>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-primary fill-current mr-1" />
                  <span className="font-semibold text-primary">{tour.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground ml-2">({tour.reviews} family reviews)</span>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-medium text-card-foreground mb-2">Family Highlights:</h4>
                <ul className="space-y-1">
                  {tour.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-primary">{tour.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">per person</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Book Family Tour</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Family Booking CTA */}
        <div className="text-center mt-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready for a Family Adventure?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our family travel specialists to customize the perfect Egyptian adventure for your family. We
              understand that every family is unique!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Plan Family Trip
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Family Travel Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
