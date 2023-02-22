import { InputsDash } from "./InputStyle";
import React from "react";

const InputDashBoard = ({ value, type, placeholder, onChange , enteredRef}) => {
    return (
      <InputsDash
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref = {enteredRef}
      />
    );
  };
 
  export default InputDashBoard;