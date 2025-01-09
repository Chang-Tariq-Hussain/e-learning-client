import React from "react";
import { Select } from 'antd';
import { BiChevronDown } from 'react-icons/bi';
import "./select-field.scss";

export default function CategorySelectField({
                                        className,
                                        label,
                                        showSearch,
                                        placeholder = 'Please Select',
                                        options = [],
                                        defaultValue,
                                        setValue,
                                        fieldName,
                                        errors
                                    }) {
    return (
        <div className={`select-field ${className}`}>
            {label && (
                <label className={'field-label'}>
                    {label} <span className={'steric'}>*</span>
                </label>
            )}
            <Select
                allowClear={true}
                showSearch={showSearch}
                placeholder={placeholder}
                status={errors && 'error'}
                suffixIcon={<BiChevronDown size={23} />}
                options={options}
                autoComplete="off"
                defaultValue={defaultValue}
                onSelect={(value, option) => {
                    console.log(value, option);
                    if (typeof setValue === 'function') {
                        setValue(fieldName, value);
                    } else {
                        console.error('setValue is not a function');
                    }
                }}
            />
            <div className="errors">
                {errors && <small className="error-message">{errors.message}</small>}
            </div>
        </div>
    );
}