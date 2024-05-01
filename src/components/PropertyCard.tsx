import { Listing } from "@prisma/client";
import { Bath, BedDouble, BoxSelect, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropertyCardProps = {
  listing: Listing;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ listing }) => {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="bg-slate-800 rounded-lg cursor-pointer"
    >
      <div className="relative w-full aspect-video overflow-hidden hover:rounded-lg">
        <Image
          src={listing.imageUrls[0]}
          alt=""
          fill
          className="rounded-lg transition duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-primary">
            ₹{listing.price}
            <span className="text-white text-sm font-[500]"> / month</span>
          </h1>
          <span className="bg-blue-600 bg-opacity-30 p-1 rounded-md text-[13px] font-bold border border-primary">
            {listing.furnishStatus}
          </span>
        </div>
        <h2 className="text-[16px] font-bold">{listing.title}</h2>

        <div className="flex items-center gap-1">
          <MapPin size="16px" />
          <p className="text-sm">{listing.address}</p>
        </div>

        <hr className="border-gray-600 my-3" />

        <div className="flex items-center justify-around w-full">
          <div className="flex items-center gap-2 border-r border-gray-600 w-[100px]">
            <BedDouble size="18px" className="text-primary" />
            <p className="text-[14px]">{listing.bedroomCount} Beds</p>
          </div>
          <div className="flex items-center gap-2 border-r border-gray-600 w-[100px]">
            <Bath size="18px" className="text-primary" />
            <p className="text-[14px]">{listing.bathroomCount} Baths</p>
          </div>
          <div className="flex items-center gap-2 ">
            <BoxSelect size="18px" className="text-primary" />
            <p className="text-[14px]">{listing.propertySqft} sqrt</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PropertyCard;
