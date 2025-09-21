"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car } from "lucide-react"

export function LocationMap() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Find Us in Egypt</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of Giza, close to the magnificent pyramids. We provide convenient pickup services
            from all major hotels in Cairo and Giza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border">
              <div className="relative h-96 bg-muted/20 flex items-center justify-center">
                {/* In a real app, you would integrate with Google Maps or similar */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">Our location near the Great Pyramids of Giza</p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a
                      href="https://maps.google.com/?q=Great+Pyramids+of+Giza,+Egypt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-card-foreground">Our Address</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">AlArab Club 777</p>
                <p className="text-sm text-muted-foreground">Pyramid Road, Giza Governorate</p>
                <p className="text-sm text-muted-foreground">Near Great Pyramids Complex</p>
                <p className="text-sm text-muted-foreground">Egypt</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <div className="flex items-center mb-4">
                <Car className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-card-foreground">Transportation</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-card-foreground">Hotel Pickup</p>
                  <p className="text-xs text-muted-foreground">Free pickup from Cairo & Giza hotels</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">Airport Transfer</p>
                  <p className="text-xs text-muted-foreground">Available from Cairo International Airport</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">Private Transport</p>
                  <p className="text-xs text-muted-foreground">Luxury vehicles with professional drivers</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Nearby Landmarks</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Great Pyramid of Khufu</span>
                  <span className="text-xs text-primary">2 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">The Great Sphinx</span>
                  <span className="text-xs text-primary">5 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pyramid of Khafre</span>
                  <span className="text-xs text-primary">3 min walk</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cairo City Center</span>
                  <span className="text-xs text-primary">30 min drive</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
