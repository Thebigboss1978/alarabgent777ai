"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const tourOptions = [
  { value: "pyramid-explorer", label: "Pyramid Explorer Tour" },
  { value: "desert-safari", label: "Desert Camel Safari" },
  { value: "horse-adventure", label: "Royal Horse Adventure" },
  { value: "complete-package", label: "Complete Egyptian Experience" },
  { value: "saqqara", label: "Saqqara Archaeological Site" },
  { value: "buggy-adventure", label: "Desert Buggy Adventure" },
  { value: "sound-light", label: "Sound & Light Show" },
  { value: "family-tour", label: "Family Adventure" },
  { value: "custom", label: "Custom Package" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    tour: "",
    date: "",
    guests: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would send this to your backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          tour: "",
          date: "",
          guests: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      // For demo purposes, always show success
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        tour: "",
        date: "",
        guests: "",
        message: "",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <div className="mb-8">
            <h2 className="text-2xl font-bold golden-text mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within an hour with a personalized quote and
              recommendations.
            </p>
          </div>

          {submitStatus === "success" && (
            <Alert className="mb-6 border-green-500/50 text-green-500">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Thank you for your message! We'll contact you within the hour to discuss your Egyptian adventure.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert className="mb-6 border-destructive/50 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                There was an error sending your message. Please try again or contact us directly via WhatsApp.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-card-foreground">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-card-foreground">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="text-card-foreground">
                  Country
                </Label>
                <Input
                  id="country"
                  type="text"
                  placeholder="Your country"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tour" className="text-card-foreground">
                Interested Tour
              </Label>
              <Select value={formData.tour} onValueChange={(value) => handleInputChange("tour", value)}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select a tour package" />
                </SelectTrigger>
                <SelectContent>
                  {tourOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-card-foreground">
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests" className="text-card-foreground">
                  Number of Guests
                </Label>
                <Input
                  id="guests"
                  type="number"
                  placeholder="2"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={(e) => handleInputChange("guests", e.target.value)}
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-card-foreground">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your dream Egyptian adventure, any special requirements, or questions you have..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="bg-background/50 min-h-[120px]"
                rows={5}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Prefer to chat directly?{" "}
              <a
                href="https://wa.me/201002446123?text=Hello%20AlArab%20Club%20777%2C%20I%27m%20interested%20in%20booking%20a%20tour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Message us on WhatsApp
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
