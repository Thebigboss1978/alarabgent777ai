"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, MapPin, Clock } from "lucide-react"

const hieroglyphs = ["𓂀", "𓆣", "𓋹", "𓊹", "𓏏", "𓎛", "𓃭", "𓇳", "𓈖", "𓊽"]

export function HeroSection() {
  const [activeGlyph, setActiveGlyph] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGlyph((prev) => (prev + 1) % hieroglyphs.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden desert-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {hieroglyphs.map((glyph, index) => (
          <div
            key={index}
            className={`absolute text-6xl hieroglyph-float ${
              index === activeGlyph ? "text-primary" : "text-muted-foreground"
            }`}
            style={{
              left: `${(index * 11) % 90}%`,
              top: `${(index * 17) % 80}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {glyph}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 golden-text">
            Gateway to
            <br />
            Ancient Egypt
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the mystical wonders of the pyramids, journey through golden deserts, and discover the secrets of
            pharaohs with AlArab Club 777
          </p>
        </div>

        {/* Interactive Portal Activation */}
        <div className="mb-12">
          <Button
            size="lg"
            className="pyramid-glow text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Activate Portal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Pyramid Explorer</h3>
            <p className="text-muted-foreground mb-4">
              Journey through ancient pyramid complexes with expert archaeological guides
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-primary">
                <Star className="h-4 w-4 mr-1" />
                <span>4.9/5</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Full Day</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl mb-4">🐪</div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Desert Safari</h3>
            <p className="text-muted-foreground mb-4">
              Experience timeless camel journeys across golden dunes with Bedouin guides
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-primary">
                <Star className="h-4 w-4 mr-1" />
                <span>4.8/5</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>2-4 Hours</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="text-3xl mb-4">👑</div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Complete Experience</h3>
            <p className="text-muted-foreground mb-4">
              Ultimate Egyptian adventure with tours, safaris, dining, and sunset viewing
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-primary">
                <Star className="h-4 w-4 mr-1" />
                <span>5.0/5</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Multi-Site</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join thousands of adventurers who have discovered ancient Egypt with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Tours
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book Now - WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
