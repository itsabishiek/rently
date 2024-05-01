import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="mt-[20px]">
      <div className="p-6 rounded-md bg-slate-900">
        <div className="bg-[url('/banner.jpg')] w-full h-72 bg-cover bg-center">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <span className="text-white text-4xl font-extrabold w-1/2 text-center">
              Showcase your properties and get benefited with Rently
              <span className="text-5xl font-bold text-primary">.</span>
            </span>
          </div>
        </div>

        <SearchBar />

        <div className="grid grid-cols-3 gap-8">
          {[...Array(5)].map((_, i) => (
            <PropertyCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
