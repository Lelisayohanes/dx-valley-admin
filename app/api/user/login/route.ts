import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Find user by username
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
  }


  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
  }

  // Create access and refresh tokens
  const accessToken = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });

  // Respond with tokens
  return NextResponse.json({ accessToken, refreshToken, user: { id: user.id, username: user.username, email: user.email } }, { status: 200 });
}
