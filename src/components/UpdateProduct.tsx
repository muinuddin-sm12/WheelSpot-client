/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  useGetSingleCarQuery,
  useUpdateAProductMutation,
} from "@/redux/features/cars/carApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
interface UpdateProductProps {
  id: string;
  onClose: () => void; // Close function to manage modal visibility
}

export function UpdateProduct({ id, onClose }: UpdateProductProps) {
  const { data } = useGetSingleCarQuery(id);
  const [updateAProduct] = useUpdateAProductMutation(undefined);
  // console.log(data)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      model: data?.data?.model,
      brand: data?.data?.brand,
      price: data?.data?.price,
      year: data?.data?.year,
      description: data?.data?.description,
      quantity: data?.data?.quantity,
    },
  });
  const onSubmit = async (productData: FieldValues) => {
    try {
      const updatedData = { id: data?.data?._id, data: productData };
      await updateAProduct(updatedData);
      toast.success('Product updated successfully', {duration: 2000})
    } catch (error) {
      toast.error("Something went wrong"!, { duration: 2000 });
    }
    // console.log(data);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      {" "}
      <DialogTrigger asChild>
        <Button variant="outline">Update Product Details</Button>
      </DialogTrigger>
      <DialogContent className=" min-h-[60vh]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Make changes to product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 p-6 bg-white rounded-lg shadow-lg"
            >
              <table className="w-full table-auto">
                <tbody>
                  <tr className="flex gap-6">
                    <td className="flex flex-col w-1/2">
                      <label
                        htmlFor="brand"
                        className="text-sm  text-gray-700 mb-2"
                      >
                        Brand:
                      </label>
                      <input
                        type="text"
                        id="brand"
                        {...register("brand")}
                        className="p-2 border rounded-md text-sm border-gray-300 outline-none focus:ring-2"
                      />
                    </td>

                    <td className="flex flex-col w-1/2">
                      <label
                        htmlFor="model"
                        className="text-sm  text-gray-700 mb-2"
                      >
                        Model:
                      </label>
                      <input
                        type="text"
                        id="model"
                        {...register("model")}
                        className="p-2 border rounded-md text-sm border-gray-300 outline-none focus:ring-2"
                      />
                    </td>
                  </tr>

                  <tr className="flex gap-6">
                    <td className="flex flex-col w-1/2">
                      <label
                        htmlFor="year"
                        className="text-sm  text-gray-700 mb-2"
                      >
                        Year:
                      </label>
                      <input
                        type="text"
                        id="year"
                        {...register("year")}
                        className="p-2 border rounded-md text-sm border-gray-300 outline-none focus:ring-2"
                      />
                    </td>

                    <td className="flex flex-col w-1/2">
                      <label
                        htmlFor="price"
                        className="text-sm  text-gray-700 mb-2"
                      >
                        Price:
                      </label>
                      <input
                        type="text"
                        id="price"
                        {...register("price")}
                        className="p-2 border rounded-md text-sm border-gray-300 outline-none focus:ring-2"
                      />
                    </td>
                  </tr>

                  <tr className="flex gap-6">
                    <td className="flex flex-col w-1/2">
                      <label
                        htmlFor="quantity"
                        className="text-sm  text-gray-700 mb-2"
                      >
                        Quantity:
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        {...register("quantity")}
                        className="p-2 border rounded-md text-sm border-gray-300 outline-none focus:ring-2"
                      />
                    </td>

                    <td className="flex flex-col w-1/2">
                      <label
                        htmlFor="description"
                        className="text-sm  text-gray-700 mb-2"
                      >
                        Description:
                      </label>
                      <textarea
                        id="description"
                        {...register("description")}
                        className="p-2 border rounded-md text-sm border-gray-300 outline-none focus:ring-2"
                        rows={4}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <Button
                type="submit"
                className="w-full py-3 button-primary text-white font-semibold rounded-m transition"
              >
                Save
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
