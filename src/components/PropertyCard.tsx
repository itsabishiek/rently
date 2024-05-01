import { Bath, BedDouble, BoxSelect, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

type PropertyCardProps = {};

const PropertyCard: React.FC<PropertyCardProps> = () => {
  return (
    <div className="bg-slate-800 rounded-lg cursor-pointer">
      <div className="relative w-full aspect-video overflow-hidden hover:rounded-lg">
        <Image
          src="/demo-pic.jpg"
          alt=""
          fill
          className="rounded-lg transition duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-primary text-[18px] font-bold">89,000</h1>
          <span className="bg-blue-600 bg-opacity-30 p-1 rounded-md text-[13px] font-bold border border-primary">
            Fully Furnished
          </span>
        </div>
        <h2 className="text-[16px] font-bold">Techybrat Agencies</h2>

        <div className="flex items-center gap-1">
          <MapPin size="16px" />
          <p className="text-sm">63 B, Turtle Street, Trichy-2</p>
        </div>

        <hr className="border-gray-600 my-3" />

        <div className="flex items-center justify-around w-full">
          <div className="flex items-center gap-2 border-r border-gray-600 w-[100px]">
            <BedDouble size="18px" className="text-primary" />
            <p className="text-[14px]">2 Beds</p>
          </div>
          <div className="flex items-center gap-2 border-r border-gray-600 w-[100px]">
            <Bath size="18px" className="text-primary" />
            <p className="text-[14px]">2 Baths</p>
          </div>
          <div className="flex items-center gap-2 ">
            <BoxSelect size="18px" className="text-primary" />
            <p className="text-[14px]">1200 sqrt</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
