import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { Button } from "../ui/button";
import { useState } from "react";

const ManageProducts = () => {
  const [dataLimit, setDataLimit] = useState(6);
  const [buttonVisible, setButtonVisible] = useState(false);
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const handleDataLimit = () => {
    setDataLimit(data.data.length);
    setButtonVisible(true);
  };
  const decreaseDataLimit = () => {
    setDataLimit(6);
    setButtonVisible(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-3 rounded-lg bg-gray-300 px-4">
        <p>All Product List</p>
        <Button className="button-primary">Add new Product</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[130px]">Product</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Year</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead className="text-right">Delete</TableHead>
            <TableHead className="text-right">Update</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data
            ?.slice()
            .reverse()
            .slice(0, dataLimit)
            .map((singleData) => (
              <TableRow key={singleData._id}>
                <TableCell className="font-medium">
                  <img
                    src={singleData.image}
                    className="h-14 w-20 object-cover"
                    alt=""
                  />
                </TableCell>
                <TableCell>{`${singleData?.brand} ${singleData?.model}`}</TableCell>
                <TableCell>{singleData?.year}</TableCell>
                <TableCell className="text-right">
                  ${singleData?.price}
                </TableCell>
                <TableCell className="text-right">
                  {singleData?.quantity}
                </TableCell>
                <TableCell className="text-right">
                  <button>
                    <MdDeleteForever />
                  </button>
                </TableCell>
                <TableCell className="text-right">
                  <button>
                    <MdOutlinePublishedWithChanges />
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {!buttonVisible && (
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => handleDataLimit()}
            className="text-sm font-medium text-[#D32F2F]"
          >
            See all
          </button>
        </div>
      )}
      {buttonVisible && (
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => decreaseDataLimit()}
            className="text-sm font-medium text-[#D32F2F]"
          >
            See less
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
