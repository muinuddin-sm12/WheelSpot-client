import WSForm from "../form/WSForm";
import WSInput from "../form/WSInput";
import { toast } from "sonner";
import { Button } from "../ui/button";
import WSSelect from "../form/WSSelect";
import { Controller, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductsSchema } from "@/schemas/addProductsSchema";
import { uploadPhoto } from "@/utils/uploadPhoto";
import { Form } from "antd";
import { useAddProductsMutation } from "@/redux/features/cars/carApi";

const categoryOptions = [
  {
    value: "Sedan",
    label: "Sedan",
    disable: false,
  },
  {
    value: "SUV",
    label: "SUV",
    disable: false,
  },
  {
    value: "Truck",
    label: "Truck",
    disable: false,
  },
  {
    value: "Coupe",
    label: "Coupe",
    disable: false,
  },
  {
    value: "Convertible",
    label: "Convertible",
    disable: false,
  },
];

const AddProducts = () => {
  const [addProducts] = useAddProductsMutation(undefined);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding product...", { duration: 2000 });
    try {
      const imageUrl = await uploadPhoto(data?.image);
      const productData = {
        brand: data.brand,
        model: data.model,
        year: Number(data.year),
        price: Number(data.price),
        category: data.category,
        description: data.description,
        quantity: Number(data?.stock),
        // inStock: true,
        image: imageUrl,
      };
      console.log(productData)
      await addProducts(productData);
      toast.success("Product Created Successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full rounded-md flex flex-col items-center">
        <p className="text-xl font-medium mb-8">Add New Product Form</p>
        <WSForm onSubmit={onSubmit} resolver={zodResolver(addProductsSchema)}>
          <div className="flex items-center gap-4">
            <WSInput type={"text"} name={"brand"} label={"Brand:"} />
            <WSInput type={"text"} name={"model"} label={"Model:"} />
          </div>
          <div className="flex items-center gap-4">
            <WSInput type={"text"} name={"year"} label={"Year:"} />
            <WSInput type={"text"} name={"price"} label={"Price:"} />
          </div>
          <div className="flex items-center gap-4">
          <WSInput type={"text"} name={"stock"} label={"Quantity:"} />
            <WSSelect
              options={categoryOptions}
              name={"category"}
              label="Category:"
            />
          </div>
          {/* image input here  */}
          <Controller
            name="image"
            render={({ field }) => (
              <Form.Item label="Image:">
                <input
                  {...field}
                  type="file"
                  accept="image/*"
                  value={field?.fileName}
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
              </Form.Item>
            )}
          />
          <WSInput
            type={"textarea"}
            name={"description"}
            label={"Description:"}
          />
          <Button type="submit" className="button-primary w-[20%] ">
            Submit
          </Button>
        </WSForm>
      </div>
    </div>
  );
};

export default AddProducts;
