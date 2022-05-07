const Letters = [
  { letter: "M", className: "group-hover:-translate-y-[5px]" },
  { letter: "E", className: "group-hover:translate-y-[2px]" },
  { letter: "N", className: "group-hover:translate-y-[4.5px]" },
  { letter: "U", className: "group-hover:-translate-y-[6px]" },
];

export default function MenuText({ displayCondition }) {
  const device = {
    small: "hidden",
    desktop: "hidden md:flex",
  };
  return (
    <ol
      translate="no"
      className={`menuText ${displayCondition ? device.small : device.desktop}`}
    >
      {Letters.map(({ letter, className }) => (
        <li key={letter} className={`${className} transition-transform`}>
          <span>{letter}</span>
        </li>
      ))}
    </ol>
  );
}
