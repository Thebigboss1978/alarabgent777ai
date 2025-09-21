"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, MapPin, ArrowRight } from "lucide-react"

const services = [
  {
    id: "pyramid-explorer",
    title: "Pyramid Explorer Tour",
    icon: "🏛️",
    description:
      "Journey through Giza's ancient pyramid complex with expert archaeological guides. Discover hidden chambers, learn about pyramid construction, and explore the Great Sphinx.",
    duration: "Full Day (8 hours)",
    groupSize: "2-15 people",
    difficulty: "Easy",
    price: "$45 - $85",
    rating: 4.9,
    reviews: 1247,
    highlights: [
      "Great Pyramid of Khufu interior visit",
      "Sphinx complex exploration",
      "Professional Egyptologist guide",
      "Traditional Egyptian lunch",
      "Hotel pickup & drop-off",
    ],
    popular: true,
  },
  {
    id: "camel-safari",
    title: "Desert Camel Safari",
    icon: "🐪",
    description:
      "Experience the timeless journey across golden dunes on camelback. Choose sunrise or sunset rides with traditional Bedouin guides and enjoy authentic desert hospitality.",
    duration: "2-4 hours",
    groupSize: "1-20 people",
    difficulty: "Easy",
    price: "$25 - $50",
    rating: 4.8,
    reviews: 892,
    highlights: [
      "Sunrise or sunset timing options",
      "Traditional Bedouin tea ceremony",
      "Professional camel handlers",
      "Desert photography opportunities",
      "Authentic cultural experience",
    ],
  },
  {
    id: "horse-adventure",
    title: "Royal Horse Adventure",
    icon: "🐎",
    description:
      "Ride like ancient pharaohs around the pyramid complex. Professional horses and safety equipment provided for all skill levels with experienced guides.",
    duration: "1-3 hours",
    groupSize: "1-8 people",
    difficulty: "Moderate",
    price: "$30 - $60",
    rating: 4.7,
    reviews: 634,
    highlights: [
      "Arabian horses trained for tourism",
      "All safety equipment included",
      "Suitable for all skill levels",
      "Pyramid backdrop riding",
      "Professional riding instruction",
    ],
  },
  {
    id: "complete-package",
    title: "Complete Egyptian Experience",
    icon: "👑",
    description:
      "Ultimate adventure package including pyramid tours, camel safari, horse riding, traditional Egyptian lunch, and sunset viewing. Perfect for creating unforgettable memories.",
    duration: "Full Day + Evening",
    groupSize: "2-12 people",
    difficulty: "Easy",
    price: "$120 - $250",
    rating: 5.0,
    reviews: 456,
    highlights: [
      "All major attractions included",
      "Multiple activity combinations",
      "Gourmet Egyptian cuisine",
      "Sunset desert viewing",
      "VIP treatment throughout",
    ],
    premium: true,
  },
  {
    id: "saqqara-exploration",
    title: "Saqqara Archaeological Site",
    icon: "🏺",
    description:
      "Explore the ancient Saqqara complex featuring the famous Step Pyramid of Djoser. Discover 4,000 years of Egyptian history with expert archaeological guides.",
    duration: "Half Day (4 hours)",
    groupSize: "2-20 people",
    difficulty: "Easy",
    price: "$35 - $70",
    rating: 4.6,
    reviews: 723,
    highlights: [
      "Step Pyramid of Djoser visit",
      "Ancient mastaba tombs",
      "Archaeological expert guide",
      "Historical timeline explanation",
      "Less crowded than Giza",
    ],
  },
  {
    id: "buggy-adventure",
    title: "Desert Buggy Adventure",
    icon: "🏎️",
    description:
      "High-speed desert exploration in modern off-road buggies. Navigate ancient dunes and paths with professional guides and comprehensive safety gear.",
    duration: "2-3 hours",
    groupSize: "1-6 people",
    difficulty: "Moderate",
    price: "$60 - $120",
    rating: 4.8,
    reviews: 389,
    highlights: [
      "Modern off-road vehicles",
      "Professional safety briefing",
      "Thrilling dune navigation",
      "Scenic desert routes",
      "Action photography included",
    ],
  },
  {
    id: "sound-light",
    title: "Sound & Light Show",
    icon: "🌙",
    description:
      "Spectacular evening show at the pyramids with narrated light projections telling the story of ancient Egypt. A magical nighttime experience under the stars.",
    duration: "1.5 hours",
    groupSize: "Any size",
    difficulty: "Easy",
    price: "$25 - $45",
    rating: 4.5,
    reviews: 1156,
    highlights: [
      "Pyramid illumination show",
      "Historical narration",
      "Multiple language options",
      "Comfortable seating area",
      "Evening desert atmosphere",
    ],
  },
  {
    id: "hotel-transfer",
    title: "Airport & Hotel Transfers",
    icon: "🚗",
    description:
      "Comfortable and reliable transportation service with professional drivers and luxury vehicles. Available 24/7 for all Cairo and Giza locations.",
    duration: "As needed",
    groupSize: "1-8 people",
    difficulty: "Easy",
    price: "$15 - $40",
    rating: 4.9,
    reviews: 2341,
    highlights: [
      "24/7 availability",
      "Professional drivers",
      "Luxury vehicle fleet",
      "Airport meet & greet",
      "Fixed pricing guarantee",
    ],
  },
]

export function ServiceGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of Egyptian adventures, each designed to provide authentic and
            unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Badges */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                {service.popular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
                {service.premium && <Badge className="bg-accent text-accent-foreground">Premium</Badge>}
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{service.icon}</div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {/* Service Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    <span>{service.groupSize}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>Difficulty: {service.difficulty}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-primary fill-current mr-1" />
                    <span className="font-semibold text-primary">{service.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">({service.reviews} reviews)</span>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-medium text-card-foreground mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {service.highlights.slice(0, 3).map((highlight, index) => (
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
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">USD</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
