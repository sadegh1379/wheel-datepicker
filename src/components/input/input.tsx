import { forwardRef } from "react";
import { InputProps } from "../types";
import "./input.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", value, name, rtl = false, ...props }, ref) => {
    return (
      <div
        className={`wd-input-container ${
          rtl ? "wd-input-rtl" : ""
        } ${className}`}
      >
        {label && <label className="wd-input-label">{label}</label>}
        <input
          ref={ref}
          readOnly
          className={`wd-input-field ${error ? "wd-input-error" : ""}`}
          type="text"
          value={value}
          dir={rtl ? "rtl" : "ltr"}
          name={name || 'date'}
          {...props}
        />
        {error && <span className="wd-input-error-message">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
