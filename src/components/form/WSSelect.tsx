import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disable?: boolean;
  }[];
};

const WSSelect = ({ label, name, options }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item className="w-[120px]" label={label}>
          <Select {...field} options={options} />
          {error && <small className="text-red-500">{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default WSSelect;
