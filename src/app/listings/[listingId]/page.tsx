import getListingById from "@/app/actions/getListingById";
import PropertyListingClient from "./PropertyListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";

type PropertyListingProps = {
  listingId?: string;
};

const PropertyListing = async ({
  params,
}: {
  params: PropertyListingProps;
}) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  return <PropertyListingClient listing={listing!} currentUser={currentUser} />;
};
export default PropertyListing;
