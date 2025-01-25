/* eslint-disable @typescript-eslint/no-unused-vars */
import WSForm from "@/components/form/WSForm";
import WSInput from "@/components/form/WSInput";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const [login] = useLoginMutation(undefined);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Logging in', {duration: 2000})
    console.log(data);
    try{
      const registerData = {
        email: data.email,
        password: data.password,
      }
      const res = await login(registerData).unwrap();
      console.log(res)
      const userAccessToken = res.data.accessToken;
      const userInfo = verifyToken(userAccessToken);
      dispatch(setUser({user: userInfo, token: userAccessToken}));
      toast.success('Logged in', {id: toastId, duration: 2000})
      navigate('/');
    }catch(err){
      toast.error("Something went wrong", {id: toastId, duration: 2000})
    }
  };
  return (
    <WSForm onSubmit={onSubmit}>
      <WSInput type={"email"} name={"email"} label={"Email:"}/>
      <WSInput type={"password"} name={"password"} label={"Password:"}/>
      <Button htmlType="submit">Login</Button>      
    </WSForm>
  );
};

export default Login;
