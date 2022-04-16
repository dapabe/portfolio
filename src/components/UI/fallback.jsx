export function Lines({ title = false, lines = 1 }) {
  return (
    <section className="noMaxWidth bg-1">
      <div className="mx-auto max-w-md">
        {title && <div className="skeleton-title-sm bg-white/40" />}
        <div>
          {Array(lines)
            .fill()
            .map((_, i) => (
              <div key={i} className="skeleton-text bg-white/40" />
            ))}
        </div>
      </div>
    </section>
  );
}
export function Box() {
  return <section></section>;
}
