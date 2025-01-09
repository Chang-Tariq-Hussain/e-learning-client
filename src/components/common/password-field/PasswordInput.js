import React, {useState} from "react";
import {Input} from 'antd';
import "./password-field.scss"
import {EyeCIcon, EyeIcon, EyeIconSmall} from "../../../../assets/icons/defaultIcons";

export default function PasswordInput(options) {
    const[pass, setPass] = useState('password');
    const changeType = () =>{
        const passType = pass === 'password' ? 'text' : 'password';
        setPass(passType)
    }
    return(
        <div className={`text-field ${options.className} `}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <Input
                {...options.rest}
                {...options.field}
                placeholder={options.placeholder}
                // prefix={options.prefix}
                status={options.errors && 'error'}
                suffix={pass == 'password' ? <span style={{lineHeight:0}} onClick={changeType}><EyeIcon /> </span> : <span style={{lineHeight:0}} onClick={changeType}><EyeCIcon /> </span> }
                type={pass}
            />
            {
                <div className="errors">
                    {options.errors && <small className="error-message">{options.errors.message}</small>}
                </div>
            }
        </div>
    )
}