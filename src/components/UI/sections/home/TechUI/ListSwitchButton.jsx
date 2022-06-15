import { FilmIcon, CollectionIcon } from "@heroicons/react/outline";

export default function ListSwitchButton({ ...props }) {
  const { displayPing, switchCondition, cb, cb2 } = props;
  return (
    <button
      type="button"
      className={`analog-shadow-right relative w-max rounded-md bg-white p-1 text-sutilBlack transition-[box-shadow_transform] before:bg-gray-500 after:absolute after:-right-2 after:-top-2 after:h-4 after:w-4 after:rounded-full active:translate-x-1 active:translate-y-1 active:shadow-inner active:shadow-gray-500 ${displayPing}`}
      onClick={() => {
        cb();
        cb2();
      }}
      title={
        switchCondition
          ? "Mostrar una lista de imagenes"
          : "Mostrar una animación"
      }
    >
      {switchCondition ? (
        <CollectionIcon className="w-6" />
      ) : (
        <FilmIcon className="w-6" />
      )}
    </button>
  );
}
