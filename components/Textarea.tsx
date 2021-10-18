import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
interface Props {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  error: any;
  required?: string;
}

const Textarea: React.FC<Props> = ({
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
      <textarea
        id={name}
        rows={4}
        {...register(name, { required: required ? required : false })}
        className="max-w-sm rounded-lg border-red-900 border-opacity-25 mt-1 focus:border-salmon focus:ring-0 text-sm resize-none"
      />

      <p className="text-xs text-salmon">{error ? error.message : ""}</p>
    </div>
  );
};

export default Textarea;
