/* eslint-disable @typescript-eslint/no-explicit-any */
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetAllOrdersQuery } from "@/redux/features/order/orderApi";
import { useAppSelector } from "@/redux/hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { MdDeleteForever } from "react-icons/md";
import Skeleton from "../Skeleton";

const Orders = () => {
  const { data } = useGetAllOrdersQuery(undefined);
  // console.log(data);
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: allUserData, isLoading } = useGetAllUsersQuery(undefined);
  const currentUserData = allUserData?.data?.find(
    (item: { email: string | undefined }) => item.email === currentUser?.email
  );
  // console.log(currentUser)
  const CurrentUserOrders = data?.data?.filter(
    (item: { user: any }) => item?.user === currentUserData?._id
  );
  if (CurrentUserOrders?.length < 1) {
    return <p className="text-sm text-center py-10">No data available</p>;
  }
  // console.log(CurrentUserOrders)
  return (
    <div>
      <div className="py-3 rounded-lg bg-gray-300 px-4">
        <p className="text-sm">Your Orders</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Id</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Pay Now</TableHead>
            <TableHead className="text-right">Delete Order</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={6} className="w-full">
                <Skeleton />
              </TableCell>
            </TableRow>
          ) : (
            CurrentUserOrders?.reverse()?.map((singleData, index) => (
              <TableRow key={index}>
                <TableCell>{singleData?.products[0]?.product}</TableCell>
                <TableCell>$ {singleData?.totalPrice}</TableCell>
                <TableCell>{singleData?.products[0]?.quantity}</TableCell>
                <TableCell
                  className={`${
                    singleData?.status === "Pending"
                      ? "text-[#FF9800]"
                      : singleData?.status === "Paid"
                      ? "text-[#4CAF50]"
                      : "text-[#F44336]"
                  } font-medium`}
                >
                  {singleData?.status}
                </TableCell>
                <TableCell className="text-right ">
                  <button
                    className={`px-2 py-1 rounded-lg text-white font-medium ${
                      singleData?.status === "Paid"
                        ? "bg-gray-500 text-gray-700"
                        : "bg-green-500 text-white"
                    }`}
                    disabled={singleData?.status === "Paid"}
                  >
                    Pay Now
                  </button>
                </TableCell>
                <TableCell className="text-right">
                  <button
                    className={`${
                      singleData?.status === "Paid"
                        ? "text-gray-500"
                        : "text-[#F44336]"
                    } font-medium text-lg `}
                    disabled={singleData?.status === "Paid"}
                  >
                    <MdDeleteForever />
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
