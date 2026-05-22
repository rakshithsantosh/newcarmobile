import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key");

function isAdmin(request: Request) {
  return request.headers.get("x-admin-password") === "ncmadmin123";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pickup, dropoff, date, pax, vehicleId, name, email, phone } = body;

    if (!pickup || !dropoff || !date || !name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const quote = await prisma.quoteRequest.create({
      data: {
        pickup,
        dropoff,
        date,
        pax: parseInt(pax) || 1,
        vehicleId,
        name,
        email,
        phone,
      }
    });

    try {
      // Send email using Resend
      await resend.emails.send({
        from: "Concierge <onboarding@resend.dev>",
        to: process.env.ADMIN_EMAIL || email, // Sending to admin email, falling back to user's email if not set
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Trip Details</h3>
          <p><strong>Pickup:</strong> ${pickup}</p>
          <p><strong>Dropoff:</strong> ${dropoff}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Passengers:</strong> ${pax}</p>
          <p><strong>Vehicle ID:</strong> ${vehicleId}</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // We still return 201 because the quote was saved successfully
    }

    return NextResponse.json({ quote }, { status: 201 });
  } catch (error) {
    console.error("Quote Creation Error:", error);
    return NextResponse.json(
      { error: "Unable to save quote." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const quotes = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ quotes });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch quotes." },
      { status: 500 }
    );
  }
}
