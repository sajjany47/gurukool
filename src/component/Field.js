import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { getIn } from "formik";
import { Dropdown } from "primereact/dropdown";

export const inputFiled = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <>
      <span className="p-float-label">
        <InputText
          className={classNames(
            {
              "p-invalid":
                getIn(errors, field.name) && getIn(touched, field.name),
            },
            "block  w-full"
          )}
          {...field}
          {...props}
        />
        <label
          className={classNames({
            "text-red-600":
              getIn(errors, field.name) && getIn(touched, field.name),
          })}
          htmlFor={field.name}
        >
          {props.header}
        </label>
      </span>
      {getIn(errors, field.name) && getIn(touched, field.name) && (
        <small className="p-error">{getIn(errors, field.name)}</small>
      )}
    </>
  );
};

export const dropdownField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <>
      <span className="p-float-label">
        <Dropdown
          {...field}
          {...props}
          className={classNames(
            {
              "border-red-600":
                getIn(errors, field.name) && getIn(touched, field.name),
            },
            " w-full"
          )}
        />

        <label htmlFor={field.name}>{props.header}</label>
      </span>
      {getIn(errors, field.name) && getIn(touched, field.name) && (
        <small className="p-error">{getIn(errors, field.name)}</small>
      )}
    </>
  );
};
