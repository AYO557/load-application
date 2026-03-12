import React from "react";

type InputFieldProps = {
  label?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  value?: string | number | readonly string[] | undefined;
  onChange?: (value: string) => void;
};

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputFieldProps): React.ReactElement => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-semibold" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="bg-white/30 w-full py-2 rounded-lg outline-black/80 p-2 font-bold"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
