import React from "react";
import getYourListings from "../actions/getYourListings";
import PropertyCard from "@/components/PropertyCard";

type MyPropertiesProps = {};

const MyProperties: React.FC<MyPropertiesProps> = async () => {
  const listings = await getYourListings();

  return (
    <div className="bg-slate-900 min-h-[calc(100vh-136px)] h-full mt-[20px] p-6 rounded-md">
      <h1 className="text-2xl font-extrabold text-primary mb-8">
        My Properties
      </h1>

      {listings?.length === 0 ? (
        <div className="flex h-[500px] items-center justify-center">
          <h3 className="text-xl font-extrabold">No Results found!</h3>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {listings?.map((listing, i) => (
            <PropertyCard key={i} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};
export default MyProperties;
