import React, {useState} from "react";
import "./date-picker.scss"
import {DatePicker} from 'antd';

export default function ThemeDatePicker(options) {

    const onChange = (e) => {
        options.setValue(options.fieldName, e)
    };

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const minimumBirthYear = currentYear - 13;

    // Calculate the maximum allowed birth year based on a reasonable limit
    const maximumBirthYear = currentYear - 100;

    // State to store the selected year
    const [selectedYear, setSelectedYear] = useState(null);

    // Handler for year selection
    const handleYearChange = (date, dateString) => {
        setSelectedYear(dateString);
    };

    return(
        <div className={`time-input ${options.className}`}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <DatePicker
                // disabledDate={(current) => {
                //     const year = current.year();
                //     return year < maximumBirthYear || year > minimumBirthYear;
                // }}
                disabledDate={options.disabledDate}
                defaultValue={options.defaultValue}
                placeholder={options.placeholder}
                picker={options.type ? options.type : 'date'}
                status={options.errors && 'error'}
                suffixIcon={options.suffix}
                onChange={(e)=> {onChange(e)}}
                format={options.format}
                disabled={options.disabled}
            />
            {
                <div className="errors">
                    {options.errors && <small className="error-message">{options.errors.message}</small>}
                </div>
            }
        </div>
    )
}