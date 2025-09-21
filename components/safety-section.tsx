"use client"

import { Card } from "@/components/ui/card"
import { Shield, Heart, Users, Phone, FileStack as FirstAid, Baby } from "lucide-react"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Comprehensive Safety Protocols",
    description:
      "All tours follow strict safety guidelines with regular equipment checks and safety briefings for families.",
  },
  {
    icon: FirstAid,
    title: "First Aid Certified Guides",
    description: "Our guides are trained in first aid and carry medical supplies suitable for common family needs.",
  },
  {
    icon: Baby,
    title: "Child-Friendly Equipment",
    description: "Safety equipment in all sizes, child-safe vehicles, and age-appropriate activity modifications.",
  },
  {
    icon: Phone,
    title: "24/7 Emergency Support",
    description: "Round-the-clock emergency contact and support system for families during their Egyptian adventure.",
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description: "Limited group sizes ensure personalized attention and better safety management for families.",
  },
  {
    icon: Heart,
    title: "Family Care Specialists",
    description: "Dedicated team members trained specifically in family travel and child safety requirements.",
  },
]

export function SafetySection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Your Family's Safety is Our Priority</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand that traveling with family requires extra care and attention. Our comprehensive safety
            measures ensure peace of mind for parents and fun for children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Safety Certifications */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6 text-foreground">Our Safety Certifications & Standards</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-sm">✓ Licensed Tour Operator</div>
            <div className="text-sm">✓ Child Safety Certified</div>
            <div className="text-sm">✓ First Aid Trained Staff</div>
            <div className="text-sm">✓ Insurance Coverage</div>
            <div className="text-sm">✓ Emergency Response Plan</div>
            <div className="text-sm">✓ Family Travel Specialists</div>
          </div>
        </div>
      </div>
    </section>
  )
}
