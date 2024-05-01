"use client";

import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

type CreatePropertyProps = {};

const CreateProperty: React.FC<CreatePropertyProps> = () => {
  const [availableList, setAvailableList] = useState<string[]>([]);
  const availableFor = [
    "Family",
    "Bachelors",
    "Family , Bachelors (Women Only)",
  ];
  const [inputForm, setInputForm] = useState({
    title: "",
    description: "",
    price: "",
    propertySqft: "",
    type: "",
    furnishStatus: "",
    address: "",
    bedroomCount: 0,
    bathroomCount: 0,
    balconyCount: 0,
    availableFor: [],
    maintenanceFee: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setInputForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateProperty = () => {};

  return (
    <div className="bg-slate-900 h-[calc(100vh-136px)] mt-[20px] p-6 rounded-md">
      <h1 className="text-2xl font-bold text-primary mb-8">Create Property</h1>

      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-4">
          <div className="p-4 bg-slate-700 min-h-44">
            <div className="border border-muted-foreground border-dashed min-h-44 w-full flex items-center justify-center text-[22px] font-bold gap-2 cursor-pointer text-gray-300">
              <Upload className="text-primary text-2xl" /> Click here to upload
            </div>
          </div>

          <Input
            placeholder="Title"
            type="text"
            className="bg-slate-800 h-14 text-[15px]"
            name="title"
            value={inputForm.title}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Description"
            className="bg-slate-800 text-[15px]"
            name="description"
            value={inputForm.description}
            onChange={handleChange}
          />

          <div className="flex items-center gap-3">
            <div className="flex-grow">
              <Label htmlFor="price">Price</Label>
              <Input
                placeholder="Price"
                type="number"
                className="bg-slate-800 h-14 text-[15px]"
                id="price"
                name="price"
                value={inputForm.price}
                onChange={handleChange}
              />
            </div>

            <div className="flex-grow">
              <Label htmlFor="maintenanceFee">Maintenance Fee</Label>
              <Input
                placeholder="Maintenance Fee"
                type="number"
                className="bg-slate-800 h-14 text-[15px]"
                id="maintenanceFee"
                name="maintenanceFee"
                value={inputForm.maintenanceFee}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <select
              className="bg-slate-800 h-14 p-2 text-sm rounded"
              name="furnishStatus"
              value={inputForm.furnishStatus}
              onChange={handleChange}
            >
              <option value="">Select Furnish Status</option>
              <option value="No Furnished">No Furnished</option>
              <option value="Semi Furnished">Semi Furnished</option>
              <option value="Fully Furnished">Fully Furnished</option>
            </select>

            <select
              className="bg-slate-800 h-14 p-2 text-sm rounded"
              name="type"
              value={inputForm.type}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Flat/Apartment">Flat / Apartment</option>
              <option value="Independent House/Villa">
                Independent House / Villa
              </option>
              <option value="Service Apartment">Service Apartment</option>
              <option value="Farm house">Farm house</option>
            </select>

            <Input
              placeholder="Sqft."
              type="number"
              className="bg-slate-800 h-14 text-[15px]"
              name="propertySqft"
              value={inputForm.propertySqft}
              onChange={handleChange}
            />
          </div>

          <Textarea
            placeholder="Address"
            className="bg-slate-800 text-[15px]"
            name="address"
            value={inputForm.address}
            onChange={handleChange}
          />

          <div className="flex items-center gap-3">
            <div>
              <Label htmlFor="bedroomCount">Bedroom Count</Label>
              <Input
                placeholder="Bedroom"
                type="number"
                className="bg-slate-800 h-14 text-[15px]"
                id="bedroomCount"
                name="bedroomCount"
                value={inputForm.bedroomCount}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="bathroomCount">Bathroom Count</Label>
              <Input
                placeholder="Bathroom"
                type="number"
                className="bg-slate-800 h-14 text-[15px]"
                id="bathroomCount"
                name="bathroomCount"
                value={inputForm.bathroomCount}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="balconyCount">Balcony Count</Label>
              <Input
                placeholder="Balcony"
                type="number"
                className="bg-slate-800 h-14 text-[15px]"
                id="balconyCount"
                name="balconyCount"
                value={inputForm.balconyCount}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span>Available for</span>

            <div className="flex gap-2">
              {availableFor.map((af, i) => (
                <span
                  key={i}
                  className="bg-blue-600 bg-opacity-30 p-2 rounded-md text-[13px] font-bold border border-primary cursor-pointer"
                  style={{
                    backgroundColor: availableList.includes(af)
                      ? "#3882f4"
                      : "",
                  }}
                  onClick={() => {
                    if (availableList.includes(af)) {
                      setAvailableList(
                        availableList.filter((item) => item !== af)
                      );
                    } else {
                      setAvailableList([...availableList, af]);
                    }
                  }}
                >
                  {af}
                </span>
              ))}
            </div>
          </div>

          <Button className="text-white" onClick={handleCreateProperty}>
            {isLoading ? <Loader /> : "Create Property"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CreateProperty;
