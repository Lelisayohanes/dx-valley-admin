import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(): Promise<NextResponse> {
  try {
    const Startups = await prisma.startupInfo.findMany({
      include: {
        contactInfo: true,
        documents: true,
        video:true
      },
    });
    return NextResponse.json({ Startups }, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error retrieving Startups:",
      error.message,
      error.stack,
      error.code
    );
    return NextResponse.json(
      { message: "An error occurred while retrieving Startups" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
