import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { username, password, email } = await req.json();

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { username }, 
  });

  if (existingUser) {
    return NextResponse.json({ message: 'Username already exists' }, { status: 400 });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt round of 10

    // Create a new user
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email, // Add email if necessary
      },
    });

    // Respond with the newly created user
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
