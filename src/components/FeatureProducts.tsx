import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import ProductCard from "./ProductCard";
import { TCar } from "@/types/global";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Skeleton from "./Skeleton";

const FeatureProducts = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);

  return (
    <div className="flex flex-col items-center px-6 md:px-12 lg:px-20 min-h-[70vh] py-16">
      <div className="flex items-center justify-between mb-4 w-full ">
        <h1 className="text-3xl font-medium mb-6">Our Latest Cars</h1>
      </div>
      {isLoading ? (
        <div className="w-full">
          <Skeleton />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-center lg:grid-cols-4">
          {data?.data
            ?.slice()
            .reverse()
            .slice(0, 8)
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

          <div className=" lg:col-span-4 md:col-span-2  flex justify-center pt-4">
            <Link
              className="uppercase flex items-center px-3 py-1 rounded-lg border border-red-400 text-[#D32F2F] font-medium text-sm"
              to={"/all-cars"}
            >
              view all cars <MdKeyboardArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureProducts;
