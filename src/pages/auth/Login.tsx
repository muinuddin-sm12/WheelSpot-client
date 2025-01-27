/* eslint-disable @typescript-eslint/no-unused-vars */
import WSForm from "@/components/form/WSForm";
import WSInput from "@/components/form/WSInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "antd";
import logo from '../../assets/Logo.png';
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginShcema } from "@/schemas/authSchema";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation(undefined);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in", { duration: 2000 });
    // console.log(data);
    try {
      const registerData = {
        email: data.email,
        password: data.password,
      };
      const res = await login(registerData).unwrap();
      console.log(res);
      const userAccessToken = res.data.accessToken;
      const userInfo = verifyToken(userAccessToken);
      dispatch(setUser({ user: userInfo, token: userAccessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[350px] border rounded-md flex flex-col items-center py-8 px-10">
        <img className="h-12 mb-2 flex justify-center" src={logo} alt="" />
        <p className="text-xl font-medium mb-8">Login Form</p>
        <WSForm onSubmit={onSubmit} resolver={zodResolver(loginShcema)}>
          <WSInput type={"email"} name={"email"} label={"Email:"} />
          <WSInput type={"password"} name={"password"} label={"Password:"} />

          <p className="text-sm mb-3 text-gray-400">New here? <Link to={'/register'} className="text-red-400 underline text-sm font-medium">Register</Link></p>
          <Button htmlType="submit" className="button-primary w-full">
            Login
          </Button>
        </WSForm>
      </div>
    </div>
  );
};

export default Login;
