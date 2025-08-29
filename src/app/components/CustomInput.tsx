import React from "react";

interface Props {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  fieldError?: true;
}

const CustomInput = ({ name, label, placeholder, type, fieldError }: Props) => {
  return (
    <fieldset className="input field-error">
      <div className="flex justify-between">
        <label htmlFor={name}>{label}</label>
        {fieldError ? (
          <span className="font-medium text-[12px] text-[#CD2C2C]">
            Wrong format
          </span>
        ) : (
          ""
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={fieldError ? "field-error" : ""}
      />
    </fieldset>
  );
};

export default CustomInput;
