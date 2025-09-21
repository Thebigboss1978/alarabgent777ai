"use client"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Clock } from "lucide-react"

export function ToursHero() {
  return (
    <section className="relative pt-20 pb-16 desert-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Premium Egyptian Adventures
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 golden-text">Discover Ancient Egypt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the mystical pyramids of Giza to the golden dunes of the Sahara, experience Egypt like never before
            with our expertly crafted tours and adventures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">10K+</span>
            </div>
            <p className="text-sm text-muted-foreground">Happy Travelers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">15+</span>
            </div>
            <p className="text-sm text-muted-foreground">Tour Destinations</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-primary mr-1" />
              <span className="text-2xl font-bold text-primary">24/7</span>
            </div>
            <p className="text-sm text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
