import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import { TCar } from "@/types/global";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";


const AllCars = () => {
  const navigate = useNavigate();
  const { register, handleSubmit: handleSearchSubmit } = useForm();
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get('search') || '';
  const { data, refetch } = useGetAllCarsQuery({ search: searchTerm });

  const [selectedBrand, setSelectedBrand] = useState('');
  console.log(selectedBrand)
   // Get unique car brands for the filter dropdown
   const uniqueBrands = [...new Set(data?.data?.map((car) => car.brand))];
   
   const handleBrandChange = (e) => {
    const filterValue = e?.target?.value;
    setSelectedBrand(filterValue);
    console.log(filterValue)
    // onFilter(searchTerm, e.target.value);
  };
  const handleClearFilters = () => {
    setSelectedBrand('');
    // onFilter('', '');
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  const onSearchSubmit = (formData: { searchTerm: string }) => {
    navigate(`?search=${formData.searchTerm}`);
    refetch(); // Refetch data with the new query parameters
  };

  return (
    <div className="h-screen overflow-y-auto px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row">
        {/* sidebar */}
        <div className="w-full lg:w-[20%] bg-gray-300 p-6">
          <h3 className="text-lg font-semibold mb-5">Search & Filter</h3>

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
              value={selectedBrand}
              onChange={handleBrandChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Brands</option>
              {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={handleClearFilters}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Clear Filters
          </button>
        </div>
        <div className="lg:flex-1 lg:py-6 pl-6">
          {/* search field  */}
          <div className="h-14 w-[60%] flex items-center justify-center mx-auto mb-6">
            <form className="w-full relative lg:px-2 py-2 flex bg-white  items-center rounded-lg" onSubmit={handleSearchSubmit(onSearchSubmit)}>
              <input
                type="text"
                placeholder="Search "
                className="w-full outline-none text-sm"
                {...register("searchTerm")}
              />
              <button type="submit" className="absolute text-lg  hover:text-[#D32F2F] right-[12px]">
              <IoSearchSharp/>
              </button>
            </form>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-center lg:grid-cols-3">
            {data?.data
              ?.slice()
              .reverse()
              .map((singleData: TCar) => (
                <ProductCard key={singleData._id} data={singleData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
