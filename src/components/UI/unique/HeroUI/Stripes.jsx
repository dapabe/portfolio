export default function Stripes({ displayCondition }) {
  const stripes = [
    {
      classes: "top-[18%] w-[55%]",
    },
    {
      classes: "top-[26%] w-1/2",
    },
  ];

  return stripes.map(({ classes }, idx) => (
    <div
      key={idx}
      className={`${classes} ${
        displayCondition ? "translate-x-0" : "-translate-x-full opacity-0"
      } after:border-l-champagnePin absolute h-9 bg-champagnePink transition-[translate_opacity] delay-300 ease-in-out after:absolute after:left-full after:border-b-[2.25rem] after:border-l-[2rem] after:border-l-champagnePink after:border-b-transparent`}
    />
  ));
}
