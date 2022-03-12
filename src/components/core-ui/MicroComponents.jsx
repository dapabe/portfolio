export const VaporSun = () => {
  let lineArr = [];
  for (let i = 0; i < 10; i++) {
    lineArr.push(
      <div
        className={`
        bg-vapor-blue absolute -bottom-[6vw] h-[10%] w-full animate-[wave_10s_linear_infinite] `}
        style={{ animationDelay: `-${[i]}s` }}
        key={[i]}
      />
    );
  }
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-[30vw] w-[30vw] items-center justify-center overflow-hidden">
          <div
            className={`sun h-[inherit]
                    w-[inherit] animate-colorRotation rounded-full transition`}
          />
          {lineArr}
        </div>
      </div>
    </>
  );
};
