import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Demo authentication - in production, use proper authentication
    if (username === "agent" && password === "alarab777") {
      const token = `demo_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

      return NextResponse.json({
        success: true,
        token,
        user: {
          id: "1",
          username: "agent",
          role: "agent",
          name: "AlArab Agent",
        },
      })
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 })
  }
}
