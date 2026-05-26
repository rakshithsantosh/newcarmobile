import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

function isAdmin(request: Request) {
  return request.headers.get("x-admin-password") === "ncmadmin123";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const pickup = clean(body.pickup);
    const dropoff = clean(body.dropoff);
    const date = clean(body.date);
    const vehicleId = clean(body.vehicleId);
    const name = clean(body.name);
    const email = clean(body.email).toLowerCase();
    const phone = clean(body.phone);
    const pax = Number(body.pax);

    if (!pickup || !dropoff || !date || !vehicleId) {
      return NextResponse.json(
        { error: "Trip date, route, and vehicle are required." },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (phone.length < 8) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const quote = await prisma.quoteRequest.create({
      data: {
        pickup,
        dropoff,
        date,
        pax: Number.isFinite(pax) && pax > 0 ? pax : 1,
        vehicleId,
        name,
        email,
        phone,
      }
    });

    try {
      if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Concierge <onboarding@resend.dev>",
          to: process.env.ADMIN_EMAIL,
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
            <p><strong>Passengers:</strong> ${quote.pax}</p>
            <p><strong>Vehicle ID:</strong> ${vehicleId}</p>
          `,
        });
      }
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // We still return 201 because the quote was saved successfully
    }

    return NextResponse.json({ quote }, { status: 201 });
  } catch (error) {
    console.error("Quote Creation Error:", error);
    return NextResponse.json(
      { error: "Unable to save quote.", details: error instanceof Error ? error.message : String(error) },
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
