/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ProductCard";
import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import { TCar } from "@/types/global";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { RxCrossCircled } from "react-icons/rx";

import Skeleton from "@/components/Skeleton";
const AllCars = () => {
  const navigate = useNavigate();
  const { register, handleSubmit: handleSearchSubmit , setValue} = useForm();
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get("search") || "";
  const filterTerm = searchParams.get("filter") || "";
  const { data, refetch } = useGetAllCarsQuery({
    search: searchTerm || undefined,
    filter: filterTerm || undefined,
  });
  // Get unique car brands for the filter dropdown
  const uniqueBrands = [
    ...new Set((data?.data as any[])?.map((car) => car.brand)),
  ];

  // Handle brand filter change
  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const params = new URLSearchParams(window.location.search);
    if (e.target.value) {
      params.set("filter", e.target.value);
    } else {
      params.delete("filter");
    }
    navigate(`?${params.toString()}`);
    refetch();
  };

  // Handle clear filters
  const handleClearFilters = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("filter"); // Clear the filter
    navigate(`?${params.toString()}`);
    refetch(); // Refetch data with the new query parameters
  };
  const handleClearSearch = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("search"); // Clear the filter
    navigate(`?${params.toString()}`);
    setValue("searchTerm", '')
    refetch();
  };
  const onSearchSubmit = (formData: any) => {
    const params = new URLSearchParams(window.location.search);
    params.set("search", formData.searchTerm);
    navigate(`?${params.toString()}`);
    refetch(); // Refetch data with the new query parameters
  };

  // console.log(searchTerm);
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <div className="flex h-screen overflow-hidden flex-col lg:flex-row z-[999]">
        {/* sidebar */}
        <div className="w-full lg:w-[20%] bg-gray-100 mt-4 md:mt-0 md:p-6">
          <h3 className="font-semibold mb-5">Search & Filter</h3>

          {/* Brand Filter Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Filter by Brand:
            </label>
            <select
              id="brand"
              // value={selectedBrand}
              onChange={handleBrandChange}
              className="mt-1 block w-full text-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" className="text-sm">
                All Brands
              </option>
              {uniqueBrands.map((brand: string, index: number) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <Button
            onClick={handleClearFilters}
            className="button-primary text-sm w-full"
          >
            Clear Filters
          </Button>
        </div>
        <div className="lg:flex-1 overflow-y-auto lg:py-6 md:pl-6">
          {/* search field  */}
          <div className="h-14 w-[60%] flex items-center justify-center mx-auto mb-6">
            <form
              className="w-full relative lg:px-2 py-2 flex items-center rounded-lg"
              onSubmit={handleSearchSubmit(onSearchSubmit)}
            >
              <input
                type="text"
                placeholder="Search "
                className="w-full bg-gray-200 py-2 px-4 rounded-lg outline-none text-sm"
                {...register("searchTerm")}
              />
              {searchTerm ? (
                <RxCrossCircled onClick={() => handleClearSearch()} className="absolute text-lg cursor-pointer hover:text-[#D32F2F] right-[16px]"/>
              ) : (
                <button
                  type="submit"
                  className="absolute text-lg  hover:text-[#D32F2F] right-[16px]"
                >
                  <IoSearchSharp />
                </button>
              )}
            </form>
          </div>
          {data?.data?.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-center lg:grid-cols-3">
              {data?.data
                ?.slice()
                .reverse()
                .map((singleData: TCar) => (
                  <ProductCard
                    key={singleData._id}
                    data={singleData}
                    _id={""}
                    brand={""}
                    model={""}
                    year={0}
                    price={0}
                    category={"Sedan"}
                    description={""}
                    quantity={0}
                    inStock={false}
                    image={""}
                  />
                ))}
            </div>
          ) : (
            <div className="w-full">
              <Skeleton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCars;
