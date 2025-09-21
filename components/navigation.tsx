"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Tours", href: "/tours", arabic: "الجولات" },
  { name: "Hotels", href: "/hotels", arabic: "الفنادق" },
  { name: "Packages", href: "/packages", arabic: "الباقات" },
  { name: "Gallery", href: "/gallery", arabic: "المعرض" },
  { name: "Family", href: "/family", arabic: "العائلة" },
  { name: "Contact", href: "/contact", arabic: "اتصل بنا" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold golden-text">AlArab 777</div>
            <div className="text-sm text-muted-foreground hidden sm:block">Gateway to Ancient Egypt</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/agent"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Agent
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/agent"
                className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Agent Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
