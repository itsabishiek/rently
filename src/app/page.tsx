import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";
import getListings, { ListingsParams } from "./actions/getListings";

type HomeProps = {
  searchParams: ListingsParams;
};

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const listings = await getListings(searchParams);

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
          {listings?.map((listing, i) => (
            <PropertyCard key={i} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
