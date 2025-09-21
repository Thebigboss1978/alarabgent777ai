import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AlArab Club 777 - Gateway to Ancient Egypt",
  description:
    "Experience the magic of ancient Egypt with premium pyramid tours, desert adventures, and authentic Egyptian experiences. Book your journey through time with AlArab Club 777.",
  generator: "v0.app",
  keywords:
    "Egypt tours, pyramid tours, Giza pyramids, desert safari, camel rides, Egyptian adventures, Cairo tours, ancient Egypt",
  openGraph: {
    title: "AlArab Club 777 - Gateway to Ancient Egypt",
    description: "Experience the magic of ancient Egypt with premium tours and adventures",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
