const Letters = [
  { letter: "M", className: "-translate-y-[5px]" },
  { letter: "E", className: "translate-y-[2px]" },
  { letter: "N", className: "translate-y-[4.5px]" },
  { letter: "U", className: "-translate-y-[6px]" },
];

export default function MenuText({ displayCondition }) {
  return (
    <ol
      translate="no"
      className={`absolute -bottom-6 w-14 justify-center gap-x-1 text-xs ${
        displayCondition ? "hidden" : "hidden md:flex"
      }`}
    >
      {Letters.map(({ letter, className }) => (
        <li
          key={letter}
          className={`group-hover:${className} transition-transform`}
        >
          {letter}
        </li>
      ))}
    </ol>
  );
}
