import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import InputLabel from "./InputLabel";

TextInput.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "number",
        "file",
        "url",
    ]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    autoComplete: PropTypes.bool,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    label: PropTypes.string,
    classNameContainer: PropTypes.string,
};

export default function TextInput({
    type = "text",
    name,
    value,
    className = "",
    autoComplete,
    isFocused,
    handleChange,
    variant = "primary",
    defaultValue,
    placeholder,
    isError = false,
    label,
    classNameContainer = "",
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className={`w-full ${classNameContainer}`}>
            <InputLabel>{label}</InputLabel>
            <input
                type={type}
                name={name}
                value={value}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                onChange={(e) => handleChange(e)}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    );
}
