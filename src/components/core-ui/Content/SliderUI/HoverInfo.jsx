export default function HoverInfo({ children }) {
  return (
    <div className="relative grid min-h-[50%] max-w-xs  place-items-center self-center p-3 text-center">
      <div className="absolute -right-[150%] -z-10 h-full w-[250%] rounded-l-full bg-gradient-to-bl from-vaporBlue to-vaporViolet" />
      <p className="max-w-[200px] p-4 text-base">{children}</p>
    </div>
  );
}
