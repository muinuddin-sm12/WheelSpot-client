import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import ProductCard from "./ProductCard";
import { TCar } from "@/types/global";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeatureProducts = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  if (isLoading) {
    return <p>Loading..</p>;
  }
  // console.log(data.data)
  return (
    <div className="flex flex-col items-center px-6 md:px-12 lg:px-20 min-h-[70vh]">
      <div className="flex items-center justify-between mb-4 w-full mt-12">
        <h1 className="text-xl font-medium">Our Latest Cars</h1>
        <div>
          <Link className="uppercase flex items-center text-[#D32F2F] font-medium text-sm" to={"/"}>view all cars <MdKeyboardArrowRight className="text-xl"/></Link>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-center lg:grid-cols-4">
        {data?.data?.slice().reverse().slice(0, 8).map((singleData: TCar) => (
          <ProductCard key={singleData._id} data={singleData} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
