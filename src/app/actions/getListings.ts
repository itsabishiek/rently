import prisma from "@/lib/prismadb";

export interface ListingsParams {
  city?: string;
  type?: string;
}

export default async function getListings(params: ListingsParams) {
  try {
    const { city, type } = params;

    let query: any = {};

    if (city) {
      query.city = city;
    }

    if (type) {
      query.type = type;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
