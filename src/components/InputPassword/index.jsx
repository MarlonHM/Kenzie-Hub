import { MyInputPassword, Container } from "./style";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

const InputPassword = ({ register, name, placeholder }) => {
  const [visible, setVisible] = useState(false);

  const showVisible = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <MyInputPassword
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        {...register(name)}
      />
      <FaEye onClick={showVisible} color={visible ? "#FFF" : "#868e96"} />
    </Container>
  );
};

export default InputPassword;
