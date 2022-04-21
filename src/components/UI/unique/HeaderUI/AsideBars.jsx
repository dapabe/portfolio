export default function AsideBars() {
  const bars = [
    { classes: "w-full h-9 border-t-4 border-t-white border" },
    { classes: "h-full w-10 right-0" },
    { classes: "w-full h-9 bottom-0" },
    // { classes: "h-full w-10" },
  ];
  const UIBars = () => {
    return bars.map(({ classes }, i) => (
      <div
        key={i}
        className={`${classes} -z-10 bg-sutilBlack opacity-0 transition-opacity md:z-10 md:opacity-100`}
      />
    ));
  };
  return <UIBars />;
}
