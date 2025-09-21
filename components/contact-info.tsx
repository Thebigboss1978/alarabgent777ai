"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin, Clock, Star } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us directly for immediate assistance",
    contact: "+20 100 244 6123",
    action: "Call Now",
    href: "tel:+201002446123",
    available: "24/7 Available",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses and instant booking",
    contact: "Chat with us",
    action: "Open WhatsApp",
    href: "https://wa.me/201002446123?text=Hello%20AlArab%20Club%20777%2C%20I%27m%20interested%20in%20booking%20a%20tour",
    available: "Usually responds within minutes",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Detailed inquiries and custom requests",
    contact: "alarabclub777@gmail.com",
    action: "Send Email",
    href: "mailto:alarabclub777@gmail.com?subject=Egyptian%20Tour%20Inquiry",
    available: "Response within 1 hour",
  },
]

const officeHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
  { day: "Saturday - Sunday", hours: "9:00 AM - 9:00 PM" },
  { day: "Emergency Support", hours: "24/7 Available" },
]

export function ContactInfo() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold golden-text mb-6">Get in Touch</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="text-sm font-medium text-primary mb-2">{method.contact}</p>
                      <p className="text-xs text-muted-foreground mb-3">{method.available}</p>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Office Hours</h3>
            </div>
            <div className="space-y-2">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{schedule.day}</span>
                  <span className="text-sm font-medium text-card-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Location */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Our Location</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Giza Governorate, Egypt</p>
              <p className="text-sm text-muted-foreground">Near the Great Pyramids Complex</p>
              <p className="text-xs text-primary">We provide pickup from all Cairo and Giza hotels</p>
            </div>
          </Card>

          {/* Trust Indicators */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-lg font-semibold text-card-foreground">Why Choose Us</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted-foreground">Licensed & Insured Tour Operator</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted-foreground">4.9/5 Rating from 10,000+ Travelers</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted-foreground">24/7 Emergency Support</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted-foreground">Money Back Guarantee</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-primary mr-2">✓</span>
                <span className="text-muted-foreground">Expert Local Guides</span>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border border-primary/20">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Emergency Contact</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent assistance during your tour, call our 24/7 emergency line
              </p>
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <a href="tel:+201002446123">Emergency: +20 100 244 6123</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
