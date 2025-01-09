import React from "react";
import {Input} from 'antd';
import "../input-field/text-input.scss"
import "./description-field.scss"

const { TextArea } = Input;

export default function DescriptionInput(options) {

    return(
        <div className={`description-field ${options.className} `}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <TextArea
                {...options.rest}
                {...options.field}
                placeholder={options.placeholder}
                // prefix={options.prefix}
                status={options.errors && 'error'}
                suffix={options.suffix}
                prefix={options.prefix}
                type={options.type ? options.type : 'text'}
                autoSize={options.autoSize ? options.autoSize : true}
                defaultValue={options.defaultValue}
            />

            {
                <div className="errors">
                    {options.errors && <small className="error-message">{options.errors.message}</small>}
                </div>
            }
        </div>
    )
}