import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

export const inputFiled = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <>
      <span className="p-float-label">
        <InputText id={props.name} name={props.name} />
        <label htmlFor="input_value">{props.header}</label>
      </span>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </>
  );
};
