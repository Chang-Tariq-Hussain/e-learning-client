import React from "react";
import { Input } from "antd";
import "./text-input.scss";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  defaultValue?: string | number;
  onClick?: () => void;
  errors?: { message?: string};
  field?: any; // Adjust type based on usage (e.g., if using Formik, this could be FieldInputProps)
  rest?: Record<string, any>; // Any additional props for the Input
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  className = "",
  prefix,
  suffix,
  type = "text",
  disabled = false,
  defaultValue,
  onClick,
  errors,
  field,
  rest,
}) => {
  return (
    <div className={`text-field ${className}`}>
      {label && (
        <label className="field-label">
          {label} <span className="steric">*</span>
        </label>
      )}
      <Input
        {...rest}
        {...field}
        placeholder={placeholder}
        status={errors?.message ? "error" : undefined}
        suffix={suffix}
        prefix={prefix}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        onClick={onClick}
      />
      {errors && (
        <div className="errors">
          <small className="error-message">{errors.message}</small>
        </div>
      )}
    </div>
  );
};

export default TextInput;
