import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Save contact message directly into Neon DB
    await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${name.trim()}, ${email.trim()}, ${subject?.trim() || "General Inquiry"}, ${message.trim()})
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been saved to the database.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Neon DB contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await sql`
      SELECT id, name, email, subject, message, created_at
      FROM contact_messages
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error("Neon DB contact fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages." },
      { status: 500 }
    );
  }
}
