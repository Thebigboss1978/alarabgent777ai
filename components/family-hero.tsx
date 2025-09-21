"use client"

import { Badge } from "@/components/ui/badge"
import { Users, Shield, Heart, Star } from "lucide-react"

export function FamilyHero() {
  return (
    <section className="relative pt-20 pb-16 desert-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Family Adventures in Egypt
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 golden-text">Family-Friendly Egyptian Adventures</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create magical memories with your loved ones through our specially designed family tours. Safe, educational,
            and unforgettable experiences for all ages.
          </p>
        </div>

        {/* Family Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Safety First</h3>
            <p className="text-sm text-muted-foreground">Comprehensive safety measures for all family members</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">All Ages Welcome</h3>
            <p className="text-sm text-muted-foreground">Activities suitable for children and grandparents</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Memory Making</h3>
            <p className="text-sm text-muted-foreground">Unforgettable experiences that bond families</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Expert Guides</h3>
            <p className="text-sm text-muted-foreground">Family-friendly guides who love working with children</p>
          </div>
        </div>
      </div>
    </section>
  )
}
