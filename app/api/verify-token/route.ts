import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    // Demo token verification - in production, use proper JWT verification
    if (token && token.startsWith("demo_token_")) {
      return NextResponse.json({
        success: true,
        user: {
          id: "1",
          username: "agent",
          role: "agent",
          name: "AlArab Agent",
        },
      })
    }

    return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Token verification failed" }, { status: 500 })
  }
}
