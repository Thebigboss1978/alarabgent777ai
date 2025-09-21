"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const pricingTiers = [
  {
    name: "Explorer",
    price: "$45",
    period: "per person",
    description: "Perfect for first-time visitors to Egypt",
    features: [
      "Pyramid complex tour",
      "Professional guide",
      "Hotel pickup",
      "Basic refreshments",
      "Photo opportunities",
      "2-3 hour duration",
    ],
    popular: false,
    cta: "Start Exploring",
  },
  {
    name: "Adventurer",
    price: "$85",
    period: "per person",
    description: "Complete Egyptian experience for enthusiasts",
    features: [
      "Everything in Explorer",
      "Camel or horse riding",
      "Traditional Egyptian lunch",
      "Sphinx complex visit",
      "Interior pyramid access",
      "Full day experience",
      "Desert sunset viewing",
    ],
    popular: true,
    cta: "Book Adventure",
  },
  {
    name: "Pharaoh",
    price: "$250",
    period: "per person",
    description: "Ultimate luxury Egyptian journey",
    features: [
      "Everything in Adventurer",
      "Private expert Egyptologist",
      "VIP pyramid access",
      "Luxury vehicle transport",
      "Gourmet dining experience",
      "Sound & light show",
      "Desert buggy adventure",
      "Professional photography",
      "Exclusive locations",
    ],
    popular: false,
    cta: "Live Like Royalty",
  },
]

export function PricingSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Choose Your Adventure</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From budget-friendly explorations to luxury pharaoh experiences, we have the perfect Egyptian adventure for
            every traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative p-8 ${tier.popular ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-border"} bg-card/50 backdrop-blur-sm`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"}`}
                size="lg"
              >
                {tier.cta}
              </Button>

              {tier.popular && (
                <div className="flex items-center justify-center mt-4 text-sm text-primary">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span>Recommended for most travelers</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All prices include professional guides, safety equipment, and basic insurance. Group discounts available for
            6+ people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Group Discounts
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Custom Package Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
