/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteAProductMutation,
  useGetAllCarsQuery,
} from "@/redux/features/cars/carApi";
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
import { useState } from "react";
import { toast } from "sonner";
import { TCar } from "@/types/global";
import { UpdateProduct } from "../UpdateProduct";

const ManageProducts = () => {
  const [dataLimit, setDataLimit] = useState(6);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, refetch } = useGetAllCarsQuery(undefined);

  const [deleteAProduct] = useDeleteAProductMutation(undefined);

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

  const handleOpenModal = (productId: string) => {
    setSelectedProductId(productId); // Set the ID of the selected product
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProductId(null); // Reset the product ID
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteAProduct(productId);
      toast.success("Product deleted successfully", {
        duration: 2000,
      });
      refetch();
    } catch (error) {
      toast.error("Something went wrong!", { duration: 2000 });
    }
  };

  return (
    <div>
      <div className="py-3 rounded-lg bg-gray-200 px-3">
        <p className="text-sm">All Product List</p>
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
            .map((singleData: TCar) => (
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
                  <button
                    onClick={() => handleDeleteProduct(singleData?._id)}
                    className="text-xl text-[#D32F2F]"
                  >
                    <MdDeleteForever />
                  </button>
                </TableCell>
                <TableCell className="text-right">
                  <button
                    onClick={() => handleOpenModal(singleData._id)} // Pass the product ID here
                    className="text-lg"
                  >
                    <MdOutlinePublishedWithChanges />
                  </button>

                  {/* Conditionally render the UpdateProduct modal */}
                  {isModalOpen && selectedProductId && (
                    <UpdateProduct
                      id={selectedProductId} // Pass the selected product's ID
                      onClose={handleCloseModal} // Pass the close function to the modal
                    />
                  )}
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
