import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import ProductCard from "./ProductCard";
import { TCar } from "@/types/global";

const FeatureProducts = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  if(isLoading){
    return <p>Loading..</p>
  }
  // console.log(data.data)
  return (
    <div className="flex flex-col items-center px-6 md:px-12 lg:px-20">
      <h1 className="text-2xl mt-16 mb-8 text-center">Our Latest Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {data?.data?.map((singleData:TCar) => (
          <ProductCard key={singleData._id} data={singleData} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
