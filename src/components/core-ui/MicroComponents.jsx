export const VaporSun = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-[30vw] w-[30vw] items-center justify-center overflow-hidden">
          <div className="sun rounded-fivl h-[inherit] w-[inherit] animate-colorRotation transition" />
          {Array.from(10).map((i) => (
            <span
              className="absolute -bottom-[6vw] h-[10%] w-full animate-[wave_10s_linear_infinite] bg-vaporBlue"
              style={{ animationDelay: `-${[i]}s` }}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};
