import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Initialize Prisma client once

export async function GET() {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();

    // Return the users as JSON
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma client is disconnected after use
  }
}
