export const EmailValidation = {
    value: new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    ),
    message: 'Invalid email address',
};

export const LinkValidation = {
    value: new RegExp(
        /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,4}/
    ),
    message: 'Invalid link',
};

export const PasswordValidation = {
    value: new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~^.#$@!%&*=?_])[A-Za-z\d`~^.#$@!%&*=?_]{8,30}$/
    ),
    message: 'Password must be 8-30 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character',
};

export const PhoneValidation = {
    value: new RegExp(/^(?!0+$)[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,9}$/im),
    message: 'Invalid phone number',
};

export const MacAddressValidation = {
    value: new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/),
    message: 'Invalid MAC address',
};

export const PercentageValidation = {
    value: new RegExp(/^(100(?:\.0{1,2})?|0*?\.\d{1,2}|\d{1,2}(?:\.\d{1,2})?)$/),
    message: 'Percentage must be between 0 and 100, with up to two decimal places',
};

export const checkEmptySpaces = (value:any) => {
    if (/^\s+$/.test(value)) {
        return 'Input cannot be empty or consist only of spaces';
    }
    return true; // Validation passed
};

export const alphaNumericValidation = {
    value: new RegExp(/^[A-Za-z]+( [A-Za-z]+)*$/),
    message: 'Only alphabets are allowed',
};

export const alphaNumericValidation2 = {
    value: new RegExp(/^[A-Za-z0-9!@#$%^&*()_+\-=[\]{}|;:'",.<>?/\\]+( [A-Za-z0-9!@#$%^&*()_+\-=[\]{}|;:'",.<>?/\\]+)*$/),
    message: 'Invalid input format',
};

export const NumericValidation = {
    value: new RegExp(/^\d+$/),
    message: 'Only numbers are allowed',
};

export const alphaNumeric = (value:any) => {
    if (!/^[A-Za-z]+$/.test(value)) {
        return 'Only alphabets are allowed';
    }
    return true; // Validation passed
};

export const minLength = (value:any) => ({
    value,
    message: `Minimum length is ${value} characters`,
});

export const maxLength = (value:any) => ({
    value,
    message: `Maximum length is ${value} characters`,
});

export const minValue = (value:any) => ({
    value,
    message: `Value must be at least ${value}`,
});

export const MinLength = {
    value: 8,
    message: 'Minimum length is 8 characters',
};

export const MinLengthTwo = {
    value: 2,
    message: 'Minimum length is 2 characters',
};

export const MaxLength = {
    value: 255,
    message: 'Maximum length is 255 characters',
};

export const Required = {
    value: true,
    message: 'This field is required',
};

export const required = (value:any) => ({
    value,
    message: 'This field is required',
});

export function handleDescription(description:string, maxLength:number) {
    if (description.length <= maxLength) {
        return description; // Description is within the limit, no need to truncate
    } else {
        const lastSpaceIndex = description.lastIndexOf(" ", maxLength);
        return lastSpaceIndex === -1
            ? description.substring(0, maxLength) + "..."
            : description.substring(0, lastSpaceIndex) + "...";
    }
}
