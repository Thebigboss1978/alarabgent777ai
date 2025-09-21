"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export function BookingCTA() {
  return (
    <section className="py-16 desert-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 golden-text">Ready for Your Egyptian Adventure?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your journey through ancient Egypt today. Our expert team is ready to help you create unforgettable
            memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">Call Direct</h3>
            <p className="text-sm text-muted-foreground mb-4">Speak with our travel experts</p>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              +20 100 244 6123
            </Button>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">Quick booking & support</p>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Chat Now
            </Button>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-4">Detailed inquiries welcome</p>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Send Email
            </Button>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-card-foreground">24/7 Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Always here to help</p>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Get Help
            </Button>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Start Your Journey Today</h3>
            <p className="text-muted-foreground mb-8">
              Join thousands of satisfied travelers who have experienced the magic of ancient Egypt with AlArab Club
              777. Book now and receive a complimentary welcome gift upon arrival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Book Your Adventure Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 bg-transparent"
              >
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by travelers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm">✓ Licensed Tour Operator</div>
            <div className="text-sm">✓ Insured & Bonded</div>
            <div className="text-sm">✓ 24/7 Emergency Support</div>
            <div className="text-sm">✓ Money Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}
