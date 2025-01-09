import React from "react";
import {Switch} from "antd";
import "./theme-switch.scss"

export default function ThemeSwitch(options) {
    const onChange = (checked) => {
        options.setIsAvailable(checked)
    };
    return(
        <div className={'theme-switch'}>
            <Switch onClick={options.onClick} defaultChecked={options.defaultCheck} onChange={onChange}/>
        </div>
    )
}