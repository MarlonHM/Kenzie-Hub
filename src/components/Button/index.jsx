import { MyButton } from "./style";

const Button = ({
  children,
  onClick,
  borderColor,
  bgcor,
  cor,
  width,
  height,
  type,
}) => {
  return (
    <MyButton
      onClick={onClick}
      borderColor={borderColor}
      bgcor={bgcor}
      cor={cor}
      width={width}
      height={height}
      type={type}
    >
      {children}
    </MyButton>
  );
};

export default Button;
