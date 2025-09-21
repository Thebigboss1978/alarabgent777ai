"use client"

import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Mail, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-20 pb-16 desert-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 golden-text">Contact AlArab Club 777</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your Egyptian adventure? Our expert team is here to help you plan the perfect journey
            through ancient wonders and desert landscapes.
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Call Us</h3>
            <p className="text-sm text-muted-foreground">+20 100 244 6123</p>
            <p className="text-xs text-primary">Available 24/7</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground">Quick responses</p>
            <p className="text-xs text-primary">Instant booking</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">alarabclub777@gmail.com</p>
            <p className="text-xs text-primary">Detailed inquiries</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Response Time</h3>
            <p className="text-sm text-muted-foreground">Within 1 hour</p>
            <p className="text-xs text-primary">Usually faster</p>
          </div>
        </div>
      </div>
    </section>
  )
}
