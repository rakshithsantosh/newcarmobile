import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isAdmin(request: Request) {
  return request.headers.get("x-admin-password") === "admin123";
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { id } = await params;

    await prisma.contactMessage.delete({
      where: { id }
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to delete message." },
      { status: 500 }
    );
  }
}
