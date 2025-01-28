import { z } from "zod";
export const addProductsSchema = z.object({
  brand: z.string({ required_error: "This field is required" }),
  model: z.string({ required_error: "This field is required" }),
  year: z.string({ required_error: "This field is required" }),
  price: z.string({ required_error: "This field is required" }),
  category: z.string({ required_error: "This field is required" }),
  description: z.string({ required_error: "This field is requried" }),
  stock: z.string({required_error: "This field is required"}),
  image: z.any({required_error: "This field is required"}),
});
