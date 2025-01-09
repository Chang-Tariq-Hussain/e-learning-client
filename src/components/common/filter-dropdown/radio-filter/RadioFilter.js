import React, {useState} from "react"
import {Radio} from "antd";
import "./radio-filter.scss"

export default function RadioFilter({items}) {
    const [value, setValue] = useState(1);
    const [openTag, setOpenTag] = useState(false);
    const [loader, setLoader] = useState(false)
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return(
        <div className={'radio-filter'}>
            <div className={'radio-list-vertical'}>
                <Radio.Group onChange={onChange} value={value}>
                    {
                        items.map((item,index)=>{
                            return(
                                <Radio value={item.value}>{item.text}</Radio>
                            )
                        })
                    }
                </Radio.Group>
            </div>
        </div>
    )
}