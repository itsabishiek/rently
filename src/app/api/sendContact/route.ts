import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { userId, listingId, name, email, phoneNumber } = await req.json();

  const contact = await prisma.contactedListing.create({
    data: {
      userId,
      listingId,
      name,
      email,
      phoneNumber,
    },
  });

  return NextResponse.json(contact);
};
