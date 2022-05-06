export function Lines({ title, lines = 1 }) {
  return (
    <section className="noMaxWidth px-10 pt-20 pb-0">
      <div className="mx-auto my-auto max-w-md">
        {title && <div className="skeleton-title-sm bg-sutilBlack/80" />}
        <div>
          {Array(lines)
            .fill()
            .map((_, i) => (
              <div key={i} className="skeleton-text bg-sutilBlack/80" />
            ))}
        </div>
      </div>
    </section>
  );
}
export function Box() {
  return <section></section>;
}
