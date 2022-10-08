const FORM_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT_URL;
import { useRouter } from "next/router";

import usePost from "@hooks/fetch/usePost";
import contact_form from "@src/assets/form_inputs.json";
import CreateInput from "@shared/randoms/CreateInput";
import { useTranslations } from "next-intl";

import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

const everyInput = Object.freeze(contact_form.contact_form.inputs);

const serverResponse = contact_form.contact_form.responses;
const postValues = Object.seal({ user_email: "", message: "" });

export default function ContactForm({ isModalOpen, handleCancel }) {
  const { response, isLoading, inputData, handleChange, formSubmit } = usePost({
    url: FORM_ENDPOINT,
    postResponses: serverResponse[locale],
    inputValues: postValues,
  });
  const t = useTranslations("/.section_contact");
  const { locale } = useRouter();

  const postResponse = response?.text || "";
  const responseClass = response?.isValid
    ? "absolute flex inset-0 text-sutilBlack tracking-wide bg-white justify-center items-center scale-125"
    : "font-Raleway text-sm max-w-[25ch] text-red-600";

  return (
    <form
      onSubmit={formSubmit}
      className={`relative flex w-[440px] rounded-md bg-white p-4 text-sutilBlack transition-opacity delay-300 ${
        isModalOpen ? "opacity-100" : "-z-10 opacity-0"
      }`}
    >
      <fieldset className="relative flex-grow space-y-2 overflow-hidden rounded-md border-2 border-sutilBlack px-4 pb-4 font-semibold">
        <legend className="flex w-max items-center justify-between text-lg tracking-widest">
          <h2 className="mr-2 uppercase">{t("heading")}</h2>
          <ChatBubbleLeftRightIcon className="w-8 text-blue-600" />
        </legend>
        {everyInput.map(({ translation, ...element }) => (
          <CreateInput
            key={element.id}
            {...element}
            {...translation[locale]}
            onChange={handleChange}
            value={inputData[element.name]}
          />
        ))}
        <section className="flex">
          <span className={responseClass}>{postResponse}</span>
          <button
            type="submit"
            disabled={isLoading}
            title={t("btn_submit.title")}
            className="my-auto ml-auto h-max min-h-[2rem] min-w-[9ch] rounded-md bg-blue-600 px-3  py-1 text-white transition-colors disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <ArrowPathIcon className="mx-auto h-6 w-6 animate-spinBackwards" />
            ) : (
              t("btn_submit.text")
            )}
          </button>
        </section>
        <button
          type="button"
          onClick={handleCancel}
          className="absolute top-0 right-0 w-max rounded-md bg-sutilBlack"
        >
          <XMarkIcon className="w-8 text-white" />
        </button>
      </fieldset>
    </form>
  );
}
