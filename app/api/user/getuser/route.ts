import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


export async function GET() {
    const prisma = new PrismaClient();
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();

    // Return the users as JSON
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}


