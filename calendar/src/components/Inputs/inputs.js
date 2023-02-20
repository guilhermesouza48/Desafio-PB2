import React from 'react';
import { Inputs } from './InputStyle';


const Input = ({
    value,
    type,
    placeholder,
    onChange,
}) => {
    return (
        <Inputs
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;