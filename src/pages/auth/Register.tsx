/* eslint-disable @typescript-eslint/no-unused-vars */
import WSForm from "@/components/form/WSForm";
import WSInput from "@/components/form/WSInput";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { Button } from "antd";
import logo from "../../assets/Logo.png";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {zodResolver} from "@hookform/resolvers/zod"
import { registrationSchema } from "@/schemas/authSchema";
const Register = () => {
  const [register] = useRegisterMutation(undefined);
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("User registering...", { duration: 2000 });
    try {
      const registerData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await register(registerData);
      toast.success("User registered successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[350px] border rounded-md flex flex-col items-center py-8 px-10">
        <img className="h-12 mb-2 flex justify-center" src={logo} alt="" />
        <p className="text-xl font-medium mb-8">Registration Form</p>
        <WSForm onSubmit={onSubmit} resolver={zodResolver(registrationSchema)}>
          <WSInput type={"text"} name={"name"} label={"Name:"} />
          <WSInput type={"email"} name={"email"} label={"Email:"} />
          <WSInput type={"password"} name={"password"} label={"Password:"} />
          <WSInput type={"file"} name={"image"} label={"Image:"} />

          <p className="text-sm mb-3 text-gray-400">
            Already registered?{" "}
            <Link
              to={"/login"}
              className="text-red-400 underline text-sm font-medium"
            >
              Login
            </Link>
          </p>
          <Button htmlType="submit" className="button-primary w-full">
            Register
          </Button>
        </WSForm>
      </div>
    </div>
  );
};

export default Register;
