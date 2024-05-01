import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getYourListings() {
  try {
    const currentUser = await getCurrentUser();

    const listings = await prisma.listing.findMany({
      where: {
        userId: currentUser?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error: any) {
    throw new Error(error);
  }
}
