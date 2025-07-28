import React from "react";
import { ButtonProps } from "../types";
import "./button.css";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  className = "",
  text = '',
  onClick,
  style,
  ...props
}) => {
  const buttonClasses = `wd-button wd-button-${size} ${className}`;

  return (
    <button style={style} onClick={onClick} className={buttonClasses} {...props}>
      {text}
    </button>
  );
};

export default Button;
