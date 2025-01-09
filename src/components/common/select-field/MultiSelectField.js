import React from "react"
import {Select} from 'antd';
import {BiChevronDown} from 'react-icons/bi'
import "./select-field.scss"

export default function MultiSelectField(options) {
    const handleChange = (value , option) => {
        // console.log(`selected ${value} ${option.map(item=> item.label)}`);
        // console.log(typeof value)
        // console.log(value, option)
        options.setValue(options.fieldName, value)
    };

    // const [selectedValues, setSelectedValues] = useState([]);
    //
    // const handleSelectChange = (selectedValues, selectedOptions) => {
    //     console.log('Selected Values:', selectedValues);
    //     console.log('Selected Labels:', selectedOptions.map(option => option.label));
    //     setSelectedValues(selectedValues);
    // };
    return(
        <div className={`select-field ${options.className} `}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <Select
                allowClear={true}
                showSearch={options.showSearch}
                placeholder={options.placeholder ? options.placeholder : 'Please Select'}
                // optionFilterProp="children"
                // filterOption={(input, option) => (option?.label ?? '').includes(input)}
                // filterSort={(optionA, optionB) =>
                //     (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                // }
                status={options.errors && 'error'}
                suffixIcon={<BiChevronDown size={23}/>}
                options={options.options}
                autoComplete="off"
                defaultValue={options.defaultValue}
                // onSelect={(value, option) => {
                //     console.log(value, option)
                //     options.setValue(options.fieldName, value)
                // }}
                popupClassName={options.popupClassName}
                onChange={handleChange}
                mode={'multiple'}
            />
            {
                <div className="errors">
                    {options.errors && <small className="error-message">{options.errors.message}</small>}
                </div>
            }
        </div>
    )
}