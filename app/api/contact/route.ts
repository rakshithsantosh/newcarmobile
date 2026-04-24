import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isAdmin(request: Request) {
  return request.headers.get("x-admin-password") === "admin123";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email).toLowerCase();
    const message = clean(body.message);

    if (name.length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (phone.length < 8) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    const contactMessage = await prisma.contactMessage.create({
      data: { name, phone, email, message }
    });

    return NextResponse.json({ contactMessage }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unable to save message." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ messages });
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch messages." },
      { status: 500 }
    );
  }
}
