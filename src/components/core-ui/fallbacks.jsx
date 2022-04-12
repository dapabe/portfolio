import { RefreshIcon } from "@heroicons/react/solid";

export function Loading() {
  return (
    <section>
      <RefreshIcon className="h-1/2 w-1/2 animate-spin text-white/50" />
    </section>
  );
}
