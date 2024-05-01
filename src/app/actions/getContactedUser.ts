import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getContactedUser() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    const contacts = await prisma.contactedListing.findMany({
      where: {
        userId: currentUser.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return contacts;
  } catch (error: any) {
    throw new Error(error);
  }
}
