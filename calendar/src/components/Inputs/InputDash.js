import { InputsDash } from "./InputStyle";
import React from "react";

const InputDashBoard = ({ value, type, placeholder, onChange }) => {
    return (
      <InputsDash
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  };
 
  export default InputDashBoard;