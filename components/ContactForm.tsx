import React from "react";
import { useForm } from "react-hook-form";
interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  return (
    <form onSubmit={onSubmit} className="w-full py-10">
      <div className="flex flex-col pb-4">
        <label htmlFor="naam" className="text-xs">
          Naam
        </label>
        <input
          type="text"
          id="naam"
          {...register("naam", { required: "Vul alstublieft uw naam in" })}
          className="max-w-sm rounded-lg border-red-900 border-opacity-25 mt-1 focus:border-salmon focus:ring-0 text-sm"
        />

        <p className="text-xs text-salmon">
          {errors.naam ? errors.naam.message : ""}
        </p>
      </div>
      <div className="flex flex-col pb-4">
        <label htmlFor="email" className="text-xs">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Vul alstublieft uw email address in",
          })}
          className="max-w-sm rounded-lg border-red-900 border-opacity-25 mt-1 focus:border-salmon focus:ring-0 text-sm"
        />
        <p className="text-xs text-salmon">
          {errors.email ? errors.email.message : ""}
        </p>
      </div>
      <div className="flex flex-col pb-4">
        <label htmlFor="bericht" className="text-xs">
          Uw Bericht
        </label>
        <textarea
          id="bericht"
          {...register("bericht", { required: "Vul uw bericht in" })}
          rows={4}
          className="max-w-sm rounded-lg border-red-900 border-opacity-25 mt-1 focus:border-salmon focus:ring-0 text-sm resize-none"
        />
        <p className="text-xs text-salmon">
          {errors.bericht ? errors.bericht.message : ""}
        </p>
      </div>
      <button
        type="submit"
        className="bg-salmon text-yellow-100 px-5 py-2 rounded"
      >
        Verzenden
      </button>
    </form>
  );
};

export default ContactForm;
