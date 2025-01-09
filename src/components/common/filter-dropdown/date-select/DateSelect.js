import React, {useEffect, useState} from "react"
import {DatePicker} from 'antd';
import "./date-select.scss"
import {useUser} from "../../../../providers/UserContext";

const { RangePicker } = DatePicker;

export default function DateSelect(options) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState(null);
    const {filters,setFilters,resetFilters} = useUser()
    const handleOpenChange = (open) => {
        // This function will be called when t  he dropdown is about to open or close
        // console.log('Dropdown is about to', open ? 'open' : 'close');
        if(open){
            options.close(true)
            // console.log('picker openm')
        }
        else {
            options.close(true)
            // console.log('picker close')
        }
        // You can perform any action you want when the dropdown is about to open or close here
    };

    useEffect(()=>{
        return () => {
            options.close(false)
        };
    })

    const handleChange = (dates, dateStrings) => {
        setFilters({
            dateRange: dates,
        });
    };

    return(
        <div className={'time-input date-select'}>
            <RangePicker
                onOpenChange={handleOpenChange}
                value={filters.dateRange}
                onChange={(dates, dateStrings) => handleChange(dates, dateStrings)}
            />
        </div>
    )
}