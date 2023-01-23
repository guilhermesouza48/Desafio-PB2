import React from 'react';
import "./inputstyle.css"

const Input = ({
    value,
    type,
    placeholder,
    onChange,
}) => {
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;