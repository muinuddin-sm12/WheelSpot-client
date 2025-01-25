import WSForm from "@/components/form/WSForm";
import WSInput from "@/components/form/WSInput";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";
const Register = () => {
  const [register] = useRegisterMutation(undefined);
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try{
      const registerData = {
        name: data.name,
        email: data.email,
        password: data.password,
      }
      await register(registerData);
    }catch(err){
      console.log(err)
    }
  };
  return (
    <WSForm onSubmit={onSubmit}>
      <WSInput type={"text"} name={"name"} label={"Name:"}/>
      <WSInput type={"email"} name={"email"} label={"Email:"}/>
      <WSInput type={"password"} name={"password"} label={"Password:"}/>
      <Button htmlType="submit">Register</Button>      
    </WSForm>
  );
};

export default Register;
