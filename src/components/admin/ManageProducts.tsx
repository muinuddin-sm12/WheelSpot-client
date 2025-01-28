import { useGetAllCarsQuery } from "@/redux/features/cars/carApi";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import image from '../../assets/ford-mustang-2024.jpeg'
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { Button } from "../ui/button";


const ManageProducts = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
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
          <TableRow>
            <TableCell className="font-medium"><img src={image} className="h-14 w-20 object-cover" alt="" /></TableCell>
            <TableCell>BMW i8</TableCell>
            <TableCell>2025</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">4</TableCell>
            <TableCell className="text-right"><button><MdDeleteForever/></button></TableCell>
            <TableCell className="text-right"><button><MdOutlinePublishedWithChanges/></button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageProducts;
