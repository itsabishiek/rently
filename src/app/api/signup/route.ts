import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name, phoneNumber, email, password, type } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      phoneNumber,
      email,
      hashedPassword,
      type,
    },
  });

  return NextResponse.json(user);
};
