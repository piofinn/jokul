/* eslint "jsx-a11y/no-onchange": 0 */

import React from "react";
import { labelVariant } from "@fremtind/jkl-core";
import { SupportLabel } from "@fremtind/jkl-typography-react";
import { SelectValue, makeSelectValueFrom } from "./Dropdown";

interface Props {
    label: string;
    items: Array<string | SelectValue>;
    inline?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    autoComplete?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: labelVariant;
    placeholder?: string;
    value?: string;
}

export function Select({
    label,
    items,
    className = "",
    onChange,
    inline = false,
    helpLabel,
    errorLabel,
    variant,
    placeholder,
    value,
    ...rest
}: Props) {
    // If no value is given, set it to first item, or to empty string if there is a placeholder
    if (!value) {
        if (!placeholder) {
            value = makeSelectValueFrom(items[0]).value;
        } else {
            value = "";
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event);
    };
    const componentClassName = "jkl-dropdown"
        .concat(inline ? ` jkl-dropdown--inline` : "")
        .concat(!!errorLabel ? ` jkl-dropdown--invalid` : "")
        .concat(value === "" ? ` jkl-dropdown--no-value` : "")
        .concat(className ? ` ${className}` : "");
    const labelClassName = "jkl-label".concat(variant ? ` jkl-label--${variant}` : "");
    return (
        <label className={componentClassName}>
            <span className={labelClassName}>{label}</span>
            <select
                value={value}
                className="jkl-dropdown__value"
                onBlur={handleChange}
                onChange={handleChange}
                {...rest}
            >
                {placeholder && value === "" && (
                    <option disabled value="">
                        {placeholder}
                    </option>
                )}
                {items.map((item) => {
                    item = typeof item === "string" ? { value: item, label: item } : item;
                    return (
                        <option data-testid="jkl-dropdown__option" key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    );
                })}
            </select>
            <span className="jkl-dropdown__chevron" />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
}
