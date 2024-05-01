"use client";

import React, { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

type SearchBarProps = {};

const SearchBar: React.FC<SearchBarProps> = () => {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const params = useSearchParams();
  const router = useRouter();

  const handleSearchProperty = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      city,
      type,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, router, city, type]);

  return (
    <div className="p-4 bg-slate-700 max-w-[800px] w-full mx-auto rounded-md -translate-y-11 flex items-center gap-2">
      <div className="flex flex-col flex-grow">
        <span className="text-[15px] mb-1 text-muted-foreground">Location</span>
        <select
          className="bg-slate-500 p-3 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">All locations</option>
          <option value="trichy">Trichy</option>
          <option value="chennai">Chennai</option>
          <option value="coimbatore">Coimbatore</option>
        </select>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] mb-1 text-muted-foreground">Type</span>
        <select
          className="bg-slate-500 p-3 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All types</option>
          <option value="Flat/Apartment">Flat / Apartment</option>
          <option value="Independent House/Villa">
            Independent House / Villa
          </option>
          <option value="Service Apartment">Service Apartment</option>
          <option value="Farm house">Farm house</option>
        </select>
      </div>

      <div className="flex flex-col">
        <span className="text-[15px] mb-1 text-muted-foreground">Search</span>
        <Button size="lg" onClick={handleSearchProperty}>
          <Search className="text-white" />
        </Button>
      </div>
    </div>
  );
};
export default SearchBar;
