export default function QuoteImage({ children }) {
  return (
    <div className="hidden min-h-full min-w-[150px] overflow-hidden rounded-full bg-white md:block">
      {children}
    </div>
  );
}
