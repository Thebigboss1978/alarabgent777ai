"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Calendar, Users, DollarSign, TrendingUp, LogOut, Eye, Edit, Trash2, Download } from "lucide-react"

interface AgentDashboardProps {
  onLogout: () => void
}

const bookingsData = [
  { month: "Jan", bookings: 45, revenue: 3200 },
  { month: "Feb", bookings: 52, revenue: 3800 },
  { month: "Mar", bookings: 61, revenue: 4200 },
  { month: "Apr", bookings: 58, revenue: 4100 },
  { month: "May", bookings: 67, revenue: 4800 },
  { month: "Jun", bookings: 73, revenue: 5200 },
]

const tourDistribution = [
  { name: "Pyramid Tours", value: 35, color: "#ffd66b" },
  { name: "Desert Safari", value: 25, color: "#4aa3ff" },
  { name: "Complete Package", value: 20, color: "#dc2626" },
  { name: "Family Tours", value: 15, color: "#10b981" },
  { name: "Other", value: 5, color: "#8b5cf6" },
]

const recentBookings = [
  {
    id: "BK001",
    customer: "Sarah Johnson",
    tour: "Pyramid Explorer",
    date: "2024-01-15",
    status: "confirmed",
    amount: "$85",
    contact: "+1-555-0123",
  },
  {
    id: "BK002",
    customer: "Ahmed Hassan",
    tour: "Desert Safari",
    date: "2024-01-16",
    status: "pending",
    amount: "$45",
    contact: "+20-100-123-456",
  },
  {
    id: "BK003",
    customer: "Maria Santos",
    tour: "Complete Package",
    date: "2024-01-17",
    status: "confirmed",
    amount: "$250",
    contact: "+55-11-9876-5432",
  },
  {
    id: "BK004",
    customer: "David Chen",
    tour: "Family Adventure",
    date: "2024-01-18",
    status: "cancelled",
    amount: "$180",
    contact: "+65-8765-4321",
  },
  {
    id: "BK005",
    customer: "Emma Wilson",
    tour: "Horse Adventure",
    date: "2024-01-19",
    status: "confirmed",
    amount: "$60",
    contact: "+44-20-7946-0958",
  },
]

export function AgentDashboard({ onLogout }: AgentDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold golden-text">Agent Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
          </div>
          <Button
            variant="outline"
            onClick={onLogout}
            className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold text-card-foreground">356</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Customers</p>
                <p className="text-2xl font-bold text-card-foreground">1,247</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold text-card-foreground">$25,400</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Rating</p>
                <p className="text-2xl font-bold text-card-foreground">4.9</p>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.2 from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bookings Chart */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Monthly Bookings</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="bookings" fill="#ffd66b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Tour Distribution */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Tour Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tourDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {tourDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-card-foreground">Recent Bookings</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Booking ID</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Tour</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Amount</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border hover:bg-muted/20">
                        <td className="p-4 text-sm text-card-foreground font-mono">{booking.id}</td>
                        <td className="p-4">
                          <div>
                            <p className="text-sm font-medium text-card-foreground">{booking.customer}</p>
                            <p className="text-xs text-muted-foreground">{booking.contact}</p>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-card-foreground">{booking.tour}</td>
                        <td className="p-4 text-sm text-muted-foreground">{booking.date}</td>
                        <td className="p-4">
                          <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                        </td>
                        <td className="p-4 text-sm font-medium text-primary">{booking.amount}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Customer Management</h3>
              <p className="text-muted-foreground">Customer management features coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Analytics & Reports</h3>
              <p className="text-muted-foreground">Advanced reporting features coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
