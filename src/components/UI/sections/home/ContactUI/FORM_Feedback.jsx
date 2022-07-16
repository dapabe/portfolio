const FORM_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT_URL;
import { useRouter } from "next/router";

import { notSelectable } from "@helpers/randoms";
import usePost from "@hooks/fetch/usePost";
import contact_form from "@src/assets/form_inputs.json";
import CreateInput from "@shared/randoms/CreateInput";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import SubmitButton from "./SubmitButton";
import { useTranslations } from "next-intl";

const everyInput = Object.freeze(contact_form.contact_form.inputs);

const serverResponse = contact_form.contact_form.responses;
const postValues = Object.seal({ user_email: "", message: "" });

export default function FORM_Feedback({ displayCondition }) {
  const { locale } = useRouter();
  const t = useTranslations("/.section_contact");
  const { response, isLoading, inputData, handleChange, formSubmit } = usePost({
    url: FORM_ENDPOINT,
    postResponses: serverResponse[locale],
    inputValues: postValues,
  });

  const postResponse = response?.text || "";
  const responseClass = response?.isValid
    ? "absolute flex inset-0 text-sutilBlack tracking-wide bg-white justify-center items-center scale-125"
    : "font-Raleway text-sm max-w-[25ch] text-red-600";

  const showFeedback = displayCondition ? "opacity-100" : "opacity-0 -z-10";
  return (
    <form onSubmit={formSubmit} className={`feedbackForm ${showFeedback}`}>
      <fieldset className="relative flex-grow space-y-2 overflow-hidden rounded-md border-2 border-sutilBlack px-4 pb-4 font-semibold">
        <legend className="flex w-max items-center justify-between text-lg tracking-widest">
          <h2 className="mr-2 uppercase">{t("heading")}</h2>
          <ChatAlt2Icon className="w-8 text-blue-600" />
        </legend>
        <Inputs
          inputData={inputData}
          handleChange={handleChange}
          displayCondition={displayCondition}
          locale={locale}
        />
        <section className="flex">
          <span className={responseClass}>{postResponse}</span>
          <SubmitButton displayCondition={isLoading} t={t} />
        </section>
      </fieldset>
    </form>
  );
}

const Inputs = ({ inputData, handleChange, displayCondition, locale }) => {
  return everyInput.map(({ translation, ...element }) => (
    <CreateInput
      key={element.id}
      {...element}
      {...translation[locale]}
      onChange={handleChange}
      value={inputData[element.name]}
      {...notSelectable(!displayCondition)}
    />
  ));
};
