import React from "react";
import { InputText } from "primereact/inputtext";

const inputFiled = (props) => {
  return (
    <>
      <span className="p-float-label">
        <InputText id={props.name} />
        <label htmlFor="username">{props.name}</label>
      </span>
    </>
  );
};

export default inputFiled;
