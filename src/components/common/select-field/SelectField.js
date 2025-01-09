import React from "react"
import {Select} from 'antd';
import {BiChevronDown} from 'react-icons/bi'
import "./select-field.scss"

export default function SelectField(options) {

    return(
        <div className={`select-field ${options.className} `}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <Select
                {...options.rest}
                {...options.field}
                disabled={options.disabled ? options.disabled : false  }
                allowClear={options.allowClear == true ? true : false}
                showSearch={options.showSearch}
                placeholder={options.placeholder ? options.placeholder : 'Please Select'}
                // optionFilterProp="children"
                // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                // filterSort={(optionA, optionB) =>
                //     (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                // }
                filterOption={(input, option) =>
                    option?.label
                        ? option.label.toString().toLowerCase().includes(input.toLowerCase()) // Convert to string first
                        : false // Handle case where label might be undefined
                }
                status={options.errors && 'error'}
                suffixIcon={<BiChevronDown size={23}/>}
                options={options.options}
                autoComplete="off"
                defaultValue={options.defaultValue}
                onSelect={(value, option) => {
                    console.log(value, option)
                    options.setValue(options.fieldName, value)

                }}
                onChange={(value)=> {
                    if (options.onChange) {
                        options.onChange(value); // Trigger the category/subcategory change handler
                    }
                }}
                onClear={() => {
                    options.setValue(options.fieldName, null); // Clear the selected value
                    if (options.onClear) {
                        options.onClear(); // Call the handleCategoryClear passed from the parent
                    }
                }}

                // mode={'multiple'}
            />
            {
                <div className="errors">
                    {options.errors && <small className="error-message">{options.errors.message}</small>}
                </div>
            }
        </div>
    )
}