import { RefreshIcon } from "@heroicons/react/solid";

export default function Fallback() {
  return (
    <section className="flex flex-col justify-center">
      <div className="skeleton-title-sm bg-white/40" />
      <div>
        {Array(10)
          .fill()
          .map((_, i) => (
            <div key={i} className="skeleton-text bg-white/40" />
          ))}
      </div>
    </section>
  );
}
