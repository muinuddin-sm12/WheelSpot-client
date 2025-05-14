/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Skeleton from "../Skeleton";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { MdDeleteForever } from "react-icons/md";
import { useGetAllOrdersQuery } from "@/redux/features/order/orderApi";

const ManageOrders = () => {
  const { data, isLoading } = useGetAllOrdersQuery(undefined);
  //  const userId = (data.data);

  if (isLoading) {
    return <p>Loading..</p>;
  }
  // console.log(data?.data);
  //  if (data?.data?.length <= 0) {
  //    return <p className="text-sm text-center py-10">No data available</p>;
  //  }
  // console.log(data)
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
            data?.data?.map(
              (
                singleData: {
                  products: {
                    product: ReactNode;
                    quantity:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  }[];
                  totalPrice:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  status:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <TableRow key={index}>
                  <TableCell>{singleData?.products[0]?.product}</TableCell>
                  <TableCell className="flex items-center"><span className="font-medium pr-[2px]">$</span>{singleData?.totalPrice} </TableCell>
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
              )
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageOrders;
