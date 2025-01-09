import React, {useState} from "react"
import {Checkbox} from 'antd';
import "./filter-select.scss"
import {useForm} from "react-hook-form";
import {useUser} from "../../../../providers/UserContext";

const CheckboxGroup = Checkbox.Group;

export default function DirectFilterSelect(options) {
    const defaultCheckedList = ['Option 1', 'Option 2'];
    const plainOptions = ['Option 1', 'Option 2', 'Option 3'];
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const {filters,setFilters,resetFilters} = useUser()

    const onChange = (list) => {
        setCheckedList(list);
        setFilters({
            directList: list,
        });
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };
    const {
        handleSubmit,
        reset,
        setValue,
        formState: {errors},
        control,
        clearErrors
    } = useForm({
        mode: 'onChange',
    })
    const onSubmit = async (data) => {
        console.log(data)
    }
    return(
        <div className={'filter-select'}>
            <CheckboxGroup options={options.filterItems ? options.filterItems : plainOptions} value={filters.directList} onChange={onChange} />
        </div>
    )
}