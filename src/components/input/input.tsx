import React, { forwardRef } from 'react';
import './input.css';
import { InputProps } from '../types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className={`wd-input-container ${className}`}>
        {label && (
          <label className="wd-input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          readOnly
          className={`wd-input-field ${error ? 'wd-input-error' : ''}`}
          type="text"
          {...props}
        />
        {error && (
          <span className="wd-input-error-message">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
