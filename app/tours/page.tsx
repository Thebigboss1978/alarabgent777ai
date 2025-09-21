import { Navigation } from "@/components/navigation"
import { ToursHero } from "@/components/tours-hero"
import { ServiceGrid } from "@/components/service-grid"
import { PricingSection } from "@/components/pricing-section"
import { BookingCTA } from "@/components/booking-cta"

export default function ToursPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ToursHero />
      <ServiceGrid />
      <PricingSection />
      <BookingCTA />
    </main>
  )
}
