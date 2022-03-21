export default function HoverInfo({ children }) {
  return (
    <div className="relative ml-4 grid min-h-full max-w-xs flex-grow place-items-center self-center overflow-hidden rounded-full p-3 text-center">
      <div className="btriangle-tl absolute top-10 -left-2 h-64 w-64 rotate-12 border-[4rem] border-vaporBlue" />
      <div className="btriangle-br absolute bottom-10  -right-2 h-64 w-64 rotate-12 border-[4rem] border-vaporBlue " />
      <div className="absolute -z-10 h-[11.5rem] w-52 rotate-[5deg] bg-vaporViolet" />
      <p className="max-w-[70%] p-4">{children}</p>
    </div>
  );
}
