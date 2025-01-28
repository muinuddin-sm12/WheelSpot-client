import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label: string;
};
const WSInput = ({ type, name, label }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name} // register as name
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              className="bg-transparent border w-[250px] text-sm border-gray-300 rounded-md outline-none"
              type={type}
              id={name}
            />
            {error && <small className="text-red-500">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default WSInput;
