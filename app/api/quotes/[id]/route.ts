import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isAdmin(request: Request) {
  return request.headers.get("x-admin-password") === "ncmadmin123";
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

    await prisma.quoteRequest.delete({
      where: { id }
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to delete quote." },
      { status: 500 }
    );
  }
}
