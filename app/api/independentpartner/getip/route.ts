import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all trainers from the database
    const independentPartners = await prisma.independentPartnerInfo.findMany({
      include: {
        personalInfo: {
          include: {
            contactInfo: true,
            addressInfo: true,
          },
        },
      },
    });


    // Return the trainers as JSON
    return NextResponse.json(independentPartners);
  } catch (error) {
    console.error('Error fetching ip:', error);
    return NextResponse.json({ error: 'Failed to fetch ip' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
