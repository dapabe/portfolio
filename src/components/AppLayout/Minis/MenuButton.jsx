export default function MenuButton({ initialState, ...props }) {
  const MenuBars = () => {
    const initial = "rounded-full bg-slate-700 sm:bg-white";
    return (
      <span
        className={
          !initialState
            ? "mx-auto my-auto flex items-center justify-center"
            : "relative grid h-12 w-12 place-items-center"
        }
      >
        <div
          className={`${initial} ${
            !initialState
              ? "h-3 w-[3px] group-hover:h-6"
              : "absolute h-2/3 w-[2px] rotate-45 group-hover:scale-110 sm:bg-slate-700"
          } transition-all`}
        />
        <div
          className={`${
            !initialState
              ? "mx-1 h-6 w-[3px] group-hover:h-3" + initial
              : "opacity-0"
          } transition-all`}
        />
        <div
          className={`${initial} ${
            !initialState
              ? " h-3 w-[3px] group-hover:h-6"
              : "absolute h-2/3 w-[2px] -rotate-45 group-hover:scale-110 sm:bg-slate-700"
          } transition-all`}
        />
      </span>
    );
  };
  const MenuText = () => {
    return (
      <span
        className={`mt-3 gap-x-1 text-[.7rem] ${
          !initialState ? "hidden sm:flex" : "hidden"
        }`}
      >
        <div className="transition-transform  group-hover:-translate-y-[5px] ">
          M
        </div>
        <div className="transition-transform  group-hover:translate-y-[2px] ">
          E
        </div>
        <div className="transition-transform  group-hover:translate-y-[4.5px]">
          N
        </div>
        <div className="transition-transform  group-hover:-translate-y-[6px]">
          U
        </div>
      </span>
    );
  };
  return (
    <button className="menuButton-container group" {...props}>
      <div className={`menuButton group ${initialState ? "active" : "closed"}`}>
        <MenuBars />
      </div>
      <MenuText />
    </button>
  );
}
