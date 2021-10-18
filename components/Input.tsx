import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  error: any;
  required?: string;
}

const Input: React.FC<InputProps> = ({
  register,
  error,
  label,
  name,
  required,
}) => {
  return (
    <div className="flex flex-col pb-4">
      <label htmlFor={name} className="text-xs">
        {label}
      </label>
      <input
        type="text"
        id={name}
        {...register(name, { required: required ? required : false })}
        className="max-w-sm rounded-lg border-red-900 border-opacity-25 mt-1 focus:border-salmon focus:ring-0 text-sm"
      />

      <p className="text-xs text-salmon">{error ? error.message : ""}</p>
    </div>
  );
};

export default Input;
