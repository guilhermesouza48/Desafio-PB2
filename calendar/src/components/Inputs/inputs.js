import React from 'react';
import "./inputstyle.css"

const Input = ({
    name,
    type,
    placeholder,
    onChange,
}) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default Input;