import React from "react"
import {Slider} from 'antd';
import "./price-filter.scss"

export default function PriceFilter({min,max, defaultValue}) {
    return(
        <div className={'price-filter'}>
            <div className={'price-filter-range'}>
                <span className={'range'}>$ {min} </span>
                <span className={'range'}>$ {max}</span>
            </div>
            <div className={'price-filter-sec'}>
                <Slider range defaultValue={defaultValue} max={max} min={min} />
            </div>
        </div>
    )
}