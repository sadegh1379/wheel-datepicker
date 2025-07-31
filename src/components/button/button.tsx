import React from "react";
import { ButtonProps } from "../types";
import "./button.css";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  className = "",
  children = "",
  onClick,
  ...props
}) => {
  const buttonClasses = `wd-button wd-button-${size} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
