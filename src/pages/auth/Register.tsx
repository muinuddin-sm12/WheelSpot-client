import WSForm from "@/components/form/WSForm";
import WSInput from "@/components/form/WSInput";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";
const Register = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
