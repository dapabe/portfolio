import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Arrows({
  prevSlide,
  nextSlide,
  indexState,
  children,
  ...props
}) {
  const attr = { style: { display: "none" }, ...props };
  //  Hard-coded Component
  //  TODO: Make it so its an infinite slider or max slides.
  const lastPos = children.props.children.props.children.length - 1;
  // const attributes = {
  //   prev: {
  //     ...((children.length <= 1 || indexState === 0) && { ...props }),
  //   },
  //   next: {
  //     ...((children.length <= 1 || indexState == lastPos) && {
  //       ...props,
  //     }),
  //   },
  // };
  const btnContainer =
    "absolute left-1/2 z-10 flex h-[15%] w-full -translate-x-1/2 justify-center from-sutilBlack via-sutilBlack/40 to-transparent";
  const btnClass =
    "rounded-md bg-slate-600 hover:bg-slate-700 transition-colors h-min p-2 self-center";

  return (
    <>
      <span className={`${btnContainer} top-0 bg-gradient-to-b`}>
        <button
          onClick={prevSlide}
          className={btnClass}
          aria-label="Anterior imagen"
          title="Anterior imagen"
          {...(children.length <= 1 && { ...props })}
        >
          <ChevronUpIcon className="w-8" />
        </button>
      </span>
      {children}
      <span className={`${btnContainer} bottom-0 bg-gradient-to-t`}>
        <button
          onClick={nextSlide}
          className={btnClass}
          aria-label="Siguiente imagen"
          title="Siguiente imagen"
          {...(children.length <= 1 && { ...props })}
        >
          <ChevronDownIcon className="w-8" />
        </button>
      </span>
    </>
  );
}
