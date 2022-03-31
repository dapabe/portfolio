export default function HoverInfo({ children }) {
  return (
    <div className="relative grid h-max w-max -rotate-45 grid-cols-2 gap-6 self-center text-center">
      <div className="-z-10 mt-auto ml-auto h-40 w-40 rounded-lg bg-gradient-to-tl from-vaporBlue to-vaporViolet" />
      <div className="absolute -bottom-1/3 right-1/2 -z-10 h-36 w-36 translate-x-1/2 rounded-lg border-2" />
      <div className="mr-auto mt-auto flex h-52 w-52 items-center justify-center rounded-lg border-l-2 border-b-2 bg-gradient-to-bl from-vaporBlue via-pink-900 to-strongRed">
        <p className="rotate-45 p-4 text-base">{children}</p>
      </div>
    </div>
  );
}
