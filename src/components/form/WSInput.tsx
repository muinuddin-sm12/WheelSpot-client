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
              className="bg-transparent border text-sm py-1 border-gray-200 rounded-md w-[150px] ml-3 outline-none px-2"
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
