import { useGetSingleCarQuery } from "@/redux/features/cars/carApi";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id);
  if (isLoading) {
    return <p>Loading..</p>;
  }
  const { brand, model, category, image,  year, description, price, inStock } =
    data.data;
  return (
    <div className="px-6 md:px-12 lg:px-20 w-full flex flex-col md:flex-row items-start gap-6 py-6 md:py-12 lg:py-16">
      <div className="h-[400px] overflow-hidden flex-1">
        <img src={image} className="object-cover bg-center h-full w-full" alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Car Details</h2>
        <div>
          <div>
            <p className="text-lg font-medium">{`${brand} ${model} ${category} - ${year}`}</p>
            <span className="text-[#D32F2F] text-sm font-medium">
              Price: <span className="text-lg">${price}</span>
            </span>
            <br />
            <span className="text-sm">
              Stock:{" "}
              {inStock ? (
                <span className="text-green-600">Abailable</span>
              ) : (
                <span className="text-red-600">Sold Out</span>
              )}
            </span>

            <div>
              <Button
                className={`button-primary mt-4 ${
                  !inStock ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!inStock}
              >
                <Link
                  to={"/"}
                  className={`${!inStock ? "pointer-events-none" : ""}`}
                >
                  Buy Now
                </Link>
              </Button>
            </div>
            <div className="mt-4">
              <p className="font-medium text-gray-700">Description:</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
