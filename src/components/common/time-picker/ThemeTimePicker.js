import React from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {TimePicker} from 'antd';
import "./time-picker.scss"

export default function ThemeTimePicker(options) {

    dayjs.extend(customParseFormat);

    const onChange = (e) => {
        // console.log('hit')
        options.setValue(options.fieldName, e)
    };
    return(
        <div className={`time-input ${options.className}`}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <TimePicker
                status={options.errors && 'error'}
                suffixIcon={options.suffix}
                onChange={(e)=> {onChange(e)}}
                // defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                defaultValue={options.defaultValue}
                use12Hours={options.use12Hours}
                format={options.format ?  options.format : 'h:mm:ss A'}
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