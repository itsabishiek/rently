import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const {
    userId,
    title,
    description,
    price,
    propertySqft,
    type,
    furnishStatus,
    city,
    address,
    bedroomCount,
    bathroomCount,
    balconyCount,
    maintenanceFee,
    imageUrls,
    availableList,
  } = await req.json();

  const property = await prisma.listing.create({
    data: {
      userId,
      title,
      description,
      price,
      propertySqft,
      type,
      furnishStatus,
      city,
      address,
      bedroomCount,
      bathroomCount,
      balconyCount,
      availableFor: availableList,
      maintenanceFee,
      imageUrls,
    },
  });

  return NextResponse.json(property);
};
