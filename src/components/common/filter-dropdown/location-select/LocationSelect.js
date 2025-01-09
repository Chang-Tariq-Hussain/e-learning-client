import React, {useEffect, useState} from "react"
import "../filter-select/filter-select.scss"
import {useForm} from "react-hook-form";
import ThemeModals from "../../modals/theme-modals/ThemeModals";
import CustomLocationC from "../../../../views/dashboard/events/create-events/CustomLocationC";
import {SlLocationPin} from "react-icons/sl";
import {useUser} from "../../../../providers/UserContext";
import {Input} from "antd";


export default function LocationSelect(options) {
    const [locationModal, setLocationModal]= useState();
    const {filters,setFilters,resetFilters} = useUser()
    const [locationField, setLocationField] = useState(filters.filterLocation)

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
    function handleLocation() {
        setLocationModal(true)
        options.closeDrop(true)
    }
    useEffect(()=>{
        // setValue('location' ,locationField)
        setFilters({
            filterLocation: locationField,
        });
        setValue('location' ,filters.filterLocation)
    }, [])

    return(
        <div className={'filter-select'}>
            {/*<div className={'dfields'} onClick={handleLocation}>*/}
            {/*    <Controller*/}
            {/*        name="location"*/}
            {/*        defaultValue={''}*/}
            {/*        control={control}*/}
            {/*        rules={{required: Required, maxLength: maxLength(100)}}*/}
            {/*        render={({field: {name, ...field}}) => (*/}
            {/*            <TextInput*/}
            {/*                placeholder={'Search Location'}*/}
            {/*                label={'Location'}*/}
            {/*                type={'text'}*/}
            {/*                field={field}*/}
            {/*                errors={errors.location}*/}
            {/*                className={'required'}*/}
            {/*                suffix={<SlLocationPin/>}*/}
            {/*            />*/}
            {/*        )}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={'text-field required\''} onClick={handleLocation}>
                <label className={'field-label'}>Location</label>
                <Input  suffix={<SlLocationPin/>} value={filters.filterLocation}  placeholder={'Search Location'} type={'text'} />
            </div>
            <ThemeModals
                title={'Custom Location'}
                open={locationModal}
                close={setLocationModal}
                content={<CustomLocationC modalClose={setLocationModal} location={locationField} setLocation={setLocationField}/>}
            />
        </div>
    )
}