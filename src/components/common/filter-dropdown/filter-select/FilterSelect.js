import React, {useState} from "react"
import {Checkbox} from 'antd';
import "./filter-select.scss"
import {Controller, useForm} from "react-hook-form";
import {maxLength} from "../../../../utils/patterns";
import TextInput from "../../input-field/TextInput";
import {useUser} from "../../../../providers/UserContext";

const CheckboxGroup = Checkbox.Group;

export default function FilterSelect(options) {
    const defaultCheckedList = ['Option 1', 'Option 2'];
    const plainOptions = ['Option 1', 'Option 2', 'Option 3'];
    const {filters,setFilters,resetFilters} = useUser()
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onChange = (list) => {
        setCheckedList(list);
        console.log(list, 'check list')
        setFilters({
            checkList: list,
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
            {
                !options.search ?
                   ''
                    :
                    <div className={'dfields'}>
                        <Controller
                            name="search"
                            defaultValue={''}
                            control={control}
                            rules={{maxLength: maxLength(200)}}
                            render={({field: {name, ...field}}) => (
                                <TextInput
                                    placeholder={'Search'}
                                    type={'text'}
                                    field={field}
                                    errors={errors.search}
                                />
                            )}
                        />
                    </div>
            }

            <CheckboxGroup options={options.filterItems ? options.filterItems : plainOptions} value={filters.checkList} onChange={onChange} />
        </div>
    )
}