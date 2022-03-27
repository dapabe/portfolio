import { useState } from "react";
import useWindowSize from "@hooks/useWindowSize";
import { MailIcon } from "@heroicons/react/solid";
export default function SectionContact() {
  const { width } = useWindowSize();
  return (
    <section className="flex h-max">
      <form
        action=""
        className="m-auto max-w-2xl flex-grow rounded-md bg-gradient-to-br from-vaporBlue to-pink-900 p-4 md:p-10"
      >
        <fieldset className="space-y-4">
          <div className="flex justify-between">
            <legend className="w-max sm:text-base sm:tracking-wider md:text-lg">
              ¿Te interesa lo que ves?
            </legend>
            <button className="rounded-full bg-white px-2  font-black uppercase tracking-widest text-sutilBlack">
              {width <= 800 ? <MailIcon className="w-8" /> : "contacto"}
            </button>
          </div>

          <textarea
            name="message"
            id=""
            placeholder="Hola Daniel, he visto tu portfolio..."
            className="w-full rounded-md p-1 text-sutilBlack placeholder:text-sutilBlack"
          />
        </fieldset>
      </form>
    </section>
  );
}
