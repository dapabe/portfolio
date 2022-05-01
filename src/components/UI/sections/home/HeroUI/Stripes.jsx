export default function Stripes({ displayCondition }) {
  const stripes = [
    {
      classes: "top-[18%] w-1/2",
    },
    {
      classes: "top-1/3 w-1/3",
    },
  ];

  return stripes.map(({ classes }, idx) => (
    <div
      key={idx}
      className={`${classes} ${
        displayCondition ? "translate-x-0" : "-translate-x-full opacity-0"
      } absolute h-20 rounded-r-full bg-champagnePink transition-[translate_opacity] delay-300 ease-in-out`}
    />
  ));
}
