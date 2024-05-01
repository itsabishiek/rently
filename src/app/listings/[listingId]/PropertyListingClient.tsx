"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Listing, User } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Bath, BedDouble, BoxSelect, MapPin } from "lucide-react";
import Link from "next/link";

type PropertyListingClientProps = {
  listing: any;
  currentUser: User | null;
};

const PropertyListingClient: React.FC<PropertyListingClientProps> = ({
  listing,
  currentUser,
}) => {
  return (
    <div className="bg-slate-900 min-h-[calc(100vh-136px)] h-full mt-[20px] p-6 rounded-md">
      <div className="w-[800px] mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-white">
            {listing.title}
          </h1>

          <Dialog>
            <DialogTrigger>
              <Button className="text-white">Contact Owner</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-primary">
                  Contact the Owner
                </DialogTitle>
                <DialogDescription className="pt-4 text-[18px]">
                  {currentUser ? (
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white">Name</span>
                        <p className="text-[16px]">{listing?.user?.name}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-white">Email</span>
                        <p className="text-[16px]">{listing?.user?.email}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-white">Phone Number</span>
                        <p className="text-[16px]">
                          {listing?.user?.phoneNumber}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-white">Type</span>
                        <p className="text-[16px]">{listing?.user?.type}</p>
                      </div>

                      <Button className="text-white mt-5">
                        Send your contact details
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white">Name</span>
                          <p className="text-[16px]">{listing?.user?.name}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-white">Email</span>
                          <p className="text-[16px]">{`${listing?.user?.email.slice(
                            0,
                            2
                          )}*******@gmail.com`}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-white">Phone Number</span>
                          <p className="text-[16px]">
                            {`${listing?.user?.phoneNumber.slice(0, 3)}*******`}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-white">Type</span>
                          <p className="text-[16px]">{listing?.user?.type}</p>
                        </div>

                        <Button className="text-white mt-5">
                          <Link href="/login">Login to get details</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <Carousel>
          <CarouselContent>
            {listing.imageUrls.map((image: string, i: any) => (
              <CarouselItem key={i}>
                <div className="relative w-full h-full aspect-video">
                  <Image src={image} alt="" fill />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-extrabold text-primary">
              ₹ {listing.price}
              <span className="text-white text-sm"> / month</span>
            </h1>

            <span className="bg-blue-600 bg-opacity-30 p-3 rounded-md text-[13px] font-bold border border-primary flex items-center gap-1">
              <MapPin size="16px" /> {listing.city}
            </span>
          </div>

          <p className="text-muted-foreground">{listing.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-primary">Type</span>
            <p className="text-[14px]">{listing.type}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">Address</span>
            <p className="text-[14px]">{listing.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">Maintenance Fee</span>
            <p className="text-[14px]">{listing.maintenanceFee}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">Furnish Status</span>
            <p className="text-[14px]">{listing.furnishStatus}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">Available For</span>
            <p className="text-[14px]">{listing.availableFor.join(", ")}</p>
          </div>
        </div>

        <div className="flex items-center justify-around w-full bg-blue-600 bg-opacity-20 p-6 border border-primary rounded-lg">
          <div className="flex items-center justify-center gap-2 border-r border-gray-600 flex-1">
            <BedDouble size="30px" className="text-primary" />
            <p className="text-[14px]">{listing.bedroomCount} Beds</p>
          </div>
          <div className="flex items-center justify-center gap-2 border-r border-gray-600 flex-1">
            <Bath size="30px" className="text-primary" />
            <p className="text-[14px]">{listing.bathroomCount} Baths</p>
          </div>
          <div className="flex items-center justify-center gap-2 flex-1">
            <BoxSelect size="30px" className="text-primary" />
            <p className="text-[14px]">{listing.propertySqft} sqrt</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyListingClient;
