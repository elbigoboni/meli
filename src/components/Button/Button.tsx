import React from "react";
import { Button as ButtonStyled } from "./Button.styles";

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);

export default Button;
