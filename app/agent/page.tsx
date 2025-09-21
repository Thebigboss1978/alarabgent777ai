"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { LoginForm } from "@/components/login-form"
import { AgentDashboard } from "@/components/agent-dashboard"

export default function AgentPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const token = localStorage.getItem("agent_token")
    if (token) {
      // Verify token validity
      verifyToken(token)
    } else {
      setIsLoading(false)
    }
  }, [])

  const verifyToken = async (token: string) => {
    try {
      // In a real app, this would verify with your backend
      const response = await fetch("/api/verify-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem("agent_token")
      }
    } catch (error) {
      console.error("Token verification failed:", error)
      localStorage.removeItem("agent_token")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = (token: string) => {
    localStorage.setItem("agent_token", token)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("agent_token")
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Verifying access...</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      {isAuthenticated ? <AgentDashboard onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
    </main>
  )
}
