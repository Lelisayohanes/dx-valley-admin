import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(): Promise<NextResponse> {
  try {
    const interns = await prisma.internsInfo.findMany({
      include: {
        contactInfo: true,
        documents: true,
        personalInfo:true
      },
    });
    return NextResponse.json({ interns }, { status: 200 });
  } catch (error: any) {
    console.error(
      "Error retrieving interns info:",
      error.message,
      error.stack,
      error.code
    );
    return NextResponse.json(
      { message: "An error occurred while retrieving interns" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
