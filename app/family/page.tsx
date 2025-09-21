import { Navigation } from "@/components/navigation"
import { FamilyHero } from "@/components/family-hero"
import { FamilyTours } from "@/components/family-tours"
import { SafetySection } from "@/components/safety-section"
import { FamilyTestimonials } from "@/components/family-testimonials"

export default function FamilyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FamilyHero />
      <FamilyTours />
      <SafetySection />
      <FamilyTestimonials />
    </main>
  )
}
