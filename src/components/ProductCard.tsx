import { TCar } from "@/types/global";
import car from "../assets/2023 Nissan Altima Gets A Minor Price Hike To Accompany Its Facelift _ Carscoops.jpeg";
import { Link } from "react-router-dom";

const ProductCard = (data: TCar) => {
  const { _id, brand, category, model, price, year } = data.data;
  return (
    <div className="flex flex-col shadow-sm rounded-lg overflow-hidden border max-w-[400px]">
      <div className=" overflow-hidden">
        <img src={car} className="object-cover " alt="" />
      </div>
      <div className="px-3 pt-2">
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-lg font-medium ">{`${brand} ${model}`}</h2>
          <div>
            <span className="font-semibold text-[#D32F2F]">
              Price: {price}$
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-2 text-sm">
              <p className="leading-none ">Model Year</p>
              <span className="text-[#D32F2F] font-medium">{year}</span>
            </div>
            <div className="text-sm">
              <p className="leading-none">Category</p>
              <span className="text-[#D32F2F] font-medium">{category}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div>
              <span>1000$/month</span>
            </div>
            <div className="text-end leading-none">
              <small>
                0% Downpayment <br /> Through Bank Finance <br/>for 5 Years
              </small>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#D32F2F] font-medium text-sm text-center pt-2 pb-4 underline w-[40%] mx-auto">
        <Link to={`/${_id}`}>View Details</Link>
      </p>
    </div>
  );
};

export default ProductCard;
