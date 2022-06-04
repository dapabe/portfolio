const Letters = [
  { letter: "M", className: "group-hover:-translate-y-[5px]" },
  { letter: "E", className: "group-hover:translate-y-[2px]" },
  { letter: "N", className: "group-hover:translate-y-[4.5px]" },
  { letter: "U", className: "group-hover:-translate-y-[6px]" },
];

export default function MenuText({ displayCondition }) {
  return (
    <ol
      translate="no"
      className={`menuText ${displayCondition ? "hidden" : "hidden md:flex"}`}
    >
      {Letters.map(({ letter, className }) => (
        <li key={letter} className={`${className} transition-transform`}>
          {letter}
        </li>
      ))}
    </ol>
  );
}
