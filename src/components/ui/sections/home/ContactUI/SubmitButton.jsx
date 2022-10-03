import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function SubmitButton({ displayCondition, t }) {
  return (
    <button
      type="submit"
      disabled={displayCondition}
      title={t("btn_submit.title")}
      className="my-auto ml-auto h-max min-h-[2rem] min-w-[9ch] rounded-md bg-blue-600 px-3  py-1 text-white transition-colors disabled:cursor-not-allowed"
    >
      {displayCondition ? (
        <ArrowPathIcon className="mx-auto h-6 w-6 animate-spinBackwards" />
      ) : (
        t("btn_submit.text")
      )}
    </button>
  );
}
