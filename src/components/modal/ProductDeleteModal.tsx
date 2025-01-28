/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteAProductMutation,
  useGetAllCarsQuery,
} from "@/redux/features/cars/carApi";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

interface UpdateProductProps {
  id: string;
  onClose: () => void; // Close function to manage modal visibility
}

export function ProductDeleteModal({ id, onClose }: UpdateProductProps) {
  const { refetch } = useGetAllCarsQuery(undefined);
  const [deleteAProduct] = useDeleteAProductMutation(undefined);

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteAProduct(productId);
      toast.success("Product deleted successfully", {
        duration: 2000,
      });
      onClose();
      refetch();
    } catch (error) {
      toast.error("Something went wrong!", { duration: 2000 });
    }
  };
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button variant="outline">Update Product Details</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg min-h-[40vh]">
        <div className="grid gap-4 py-4 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <p className="font-medium text-gray-700 mb-6">
                Are you sure you want to permanently delete this product?
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => onClose()} className="button-primary">
                No
              </Button>
              <Button
                onClick={() => handleDeleteProduct(id)}
                className=" bg-green-600 hover:bg-green-500"
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
