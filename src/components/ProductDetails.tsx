/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetSingleCarQuery } from "@/redux/features/cars/carApi";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { toast } from "sonner";
import { useOrderProductMutation } from "@/redux/features/order/orderApi";
import Skeleton from "./Skeleton";

const ProductDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const currentUserData = useAppSelector(selectCurrentUser);
  if(!currentUserData){
    redirect('/login')
  }
  console.log(currentUserData)
  const { data: userData } = useGetAllUsersQuery(undefined);
  const [orderProduct] = useOrderProductMutation(undefined);
  const currentUser = userData?.data?.find(
    (item: any) => item?.email === currentUserData?.email
  );
  const currentUserId = currentUser?._id;

  const { data, isLoading } = useGetSingleCarQuery(id);
  
  if(isLoading){
    return <Skeleton/>
  }
  // console.log(data)
  const {
    _id,
    brand,
    model,
    category,
    image,
    year,
    description,
    price,
    inStock,
  } = data.data;

  // console.log(success)
  const handleOrder = async () => {
    try {
      if(!currentUserId){
        navigate('/login');
        return;
      }
      const toastId = toast.loading("Order placing..", { duration: 2000 });
      const orderData = {
        user: currentUserId,
        products: [{ product: _id, quantity: 1 }],
      };
      // console.log(orderData);
      const response = await orderProduct(orderData).unwrap();
      // console.log('response', response)
      if (response.status) {
        toast.success("Order placed successfully!", {
          id: toastId,
          duration: 2000,
        });
        window.location.href = response.data;
      } else {
        toast.error(response.message || "Failed to place order.", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="px-6 md:px-12 lg:px-20 w-full flex flex-col md:flex-row items-start gap-6 py-6 md:py-12 lg:py-16">
      <div className="h-[400px] overflow-hidden flex-1">
        <img
          src={image}
          className="object-cover bg-center h-full w-full"
          alt=""
        />
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
            <span className="text-sm font-medium">
              Stock:{" "}
              {inStock ? (
                <span className="text-green-600">Abailable</span>
              ) : (
                <span className="text-red-600">Sold Out</span>
              )}
            </span>

            <div>
              <Button
                onClick={() => handleOrder()}
                className={`button-primary mt-4 ${
                  !inStock ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!inStock}
              >
                Buy Now
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
