import React from 'react';
import {InputNumber} from 'antd';
import "./number-input.scss"

export default function NumberInput(options) {

    const onChange = (value) => {
        options.clearError(options.fieldName)
        // console.log('changed', value);
        options.setValue(options.fieldName , value)
    };

    return(
        <div className={`number-input ${options.className} `}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <InputNumber
                {...options.rest}
                {...options.field}
                defaultValue={options.defaultValue ? options.defaultValue : ''}
                formatter={(value) => `${options.sign ? options.sign : ''} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
                prefix={options.prefix && options.prefix}
                placeHolder={options.placeHolder}
                status={options.errors && 'error'}
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