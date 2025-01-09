import React, {useState} from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./phone-field.scss"

export default function PhoneField(options) {
    const [value, setValue] = useState()
    const [countryCode, setCountryCode] = useState('AE');
    return(
        <div className={`phone-field ${options.errors && 'has-error'} ${options.className}`}>
            {
                options.label && (
                    <label className={'field-label'}>{options.label} <span className={'steric'}>*</span></label>
                )
            }
            <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry={countryCode}
                value={value}
                onChange={(value) => setValue(value)}
                onCountryChange={(value) => setCountryCode(value)}
                placeholder={options.placeholder}
                {...options.field}
                disabled={options.disabled}
                readOnly={options.readOnly}
            />

            {
                <div className="errors">
                    {options.errors && <small className="error-message">{options.errors.message}</small>}
                </div>
            }
        </div>
    )
}