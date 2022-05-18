export default function Stripes({ displayCondition }) {
  const stripes = [
    { className: "top-[20%] w-1/3 h-20" },
    { className: "top-1/3 w-[25%] h-10" },
  ];

  return stripes.map(({ className }, idx) => (
    <div
      key={idx}
      className={`${className} ${
        displayCondition ? "translate-x-0" : "-translate-x-full opacity-0"
      } absolute rounded-r-full bg-champagnePink transition-[translate_opacity] delay-300 ease-in-out`}
    />
  ));
}
