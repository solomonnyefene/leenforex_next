import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  console.log('EMAIL', email)

  // Dummy authentication logic (replace with real DB/auth provider)
  if (email === "vansolo313@gmail.com" && password === "Skido123.") {
    // In a real app, set a secure cookie or JWT here
    return NextResponse.json({ success: true, message: "Login successful" });
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
