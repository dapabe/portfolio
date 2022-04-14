import { RefreshIcon } from "@heroicons/react/solid";

export default function Fallback({ title = true, lines = 1 }) {
  return (
    <section className="flex flex-col justify-center">
      {title && <div className="skeleton-title-sm bg-white/40" />}
      <div>
        {Array(lines)
          .fill()
          .map((_, i) => (
            <div key={i} className="skeleton-text bg-white/40" />
          ))}
      </div>
    </section>
  );
}
