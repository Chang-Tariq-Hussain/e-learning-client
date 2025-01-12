import React from "react";
import { Select, SelectProps } from "antd";
import { BiChevronDown } from "react-icons/bi";
import "./select-field.scss";

interface SelectFieldProps extends SelectProps<any> {
  label?: string; // Label for the field
  className?: string; // Additional class names for styling
  errors?: { message?: string }; // Error object for validation
  options?: { label: string; value: any }[]; // Options for the select dropdown
  fieldName?: string; // Name of the field for form handling
  setValue?: (field: string, value: any) => void; // Function to set the field value in the parent component
  onClear?: () => void; // Callback for clearing the selection
  onChange?: (value: any) => void; // Callback for handling change in value
  clearErrors?: (field: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  className = "",
  errors,
  options = [],
  fieldName,
  setValue,
  onClear,
  onChange,
  clearErrors,
  ...rest
}) => {
  return (
    <div className={`select-field ${className}`}>
      {label && (
        <label className="field-label">
          {label} <span className="steric">*</span>
        </label>
      )}
      <Select
        {...rest}
        disabled={rest.disabled || false}
        allowClear={rest.allowClear || false}
        showSearch={rest.showSearch || false}
        placeholder={rest.placeholder || "Please Select"}
        filterOption={(input, option) =>
          option?.label
            ? option.label.toString().toLowerCase().includes(input.toLowerCase())
            : false
        }
        status={errors ? "error" : undefined}
        suffixIcon={<BiChevronDown size={23} />}
        options={options}
        // autoComplete="off"
        onSelect={(value, option) => {
          if (setValue && fieldName) {
            setValue(fieldName, value);
          }
          if(clearErrors && fieldName){
            clearErrors(fieldName);
          }
        }}
        onChange={(value) => {
          if (onChange) {
            onChange(value);
          }
        }}
        onClear={() => {
          if (setValue && fieldName) {
            setValue(fieldName, null);
          }
          if (onClear) {
            onClear();
          }
        }}
      />
      <div className="errors">
        {errors && <small className="error-message">{errors.message}</small>}
      </div>
    </div>
  );
};

export default SelectField;
