import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Textarea from "./Textarea";
interface ContactFormProps {}

const VriendenForm: React.FC<ContactFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });
  const watchBedrag = watch("bedrag");
  return (
    <form onSubmit={onSubmit} className="w-full py-10">
      <Input
        register={register}
        label="Volledige naam"
        name="naam"
        error={errors.voornaam}
        required="Vul uw volledige naam in"
      />
      <Input
        register={register}
        label="Adres"
        name="adres"
        error={errors.adres}
      />
      <Input
        register={register}
        label="Postcode en plaats"
        name="postcode"
        error={errors.postcode}
      />
      <Input
        register={register}
        label="Email"
        name="email"
        error={errors.email}
        required="Vul uw email adres in"
      />
      <Input
        register={register}
        label="Telefoonnummer"
        name="telefoon"
        error={errors.telefoon}
      />
      <div className="pb-4">
        <div className="py-1">
          <input
            type="radio"
            {...register("bedrag")}
            id="25-per-seizoen"
            value="25-per-seizoen"
          />
          <label htmlFor="25-per-seizoen" className="pl-2 text-sm">
            Ja ik word vriend(in) van Voca Me voor 25,- per seizoen
          </label>
        </div>
        <div className="py-1">
          <input
            type="radio"
            {...register("bedrag")}
            id="50-per-seizoen"
            value="50-per-seizoen"
          />
          <label htmlFor="50-per-seizoen" className="pl-2 text-sm">
            Ja ik word vriend(in) van Voca Me voor 50,- per seizoen
          </label>
        </div>
        <div className="py-1">
          <input
            type="radio"
            {...register("bedrag")}
            id="eigen-bedrag"
            value="eigen-bedrag"
          />
          <label htmlFor="eigen-bedrag" className="pl-2 text-sm">
            Ja ik word vriend(in) van Voca Me en vul het bedrag hieronder in
            (min. 25,-)
          </label>
        </div>
        <div className="py-1">
          <input
            type="radio"
            {...register("bedrag")}
            id="eenmalig-eigen-bedrag"
            value="eenmalig-eigen-bedrag"
          />
          <label htmlFor="eenmalig-eigen-bedrag" className="pl-2 text-sm">
            Ik doe een eenmalige (jubileum)donatie en vul het bedrag hieronder
            in
          </label>
        </div>
      </div>
      <Textarea
        register={register}
        name="opmerking"
        label="Vul hier het bedrag van uw vrije donatie of eventuele opmerking in"
        error={errors.opmerking}
        required={
          watchBedrag === "eigen-bedrag" ||
          watchBedrag === "eenmalig-eigen-bedrag"
            ? "Vul uw bedrag in"
            : undefined
        }
      />

      <button
        type="submit"
        className="bg-salmon text-yellow-100 px-5 py-2 rounded"
      >
        Verzenden
      </button>
    </form>
  );
};

export default VriendenForm;
