import { MyInput } from "./style";

const Input = ({ type, placeholder, register, name, disabled }) => {
  return (
    <MyInput
      type={type}
      placeholder={placeholder}
      {...register(name)}
      disabled={disabled}
    />
  );
};

export default Input;
