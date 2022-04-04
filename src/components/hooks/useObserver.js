import { useEffect, useMemo, useState } from "react";

export default function useObserver(
  targetRef = null,
  { root, threshold, rootMargin, runOnce, onVisible }
) {
  const ref = useMemo(() => targetRef, []);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      console.error("targetRef is nullish or empty");
      return;
    }
    const options = {
      root: root ?? null,
      rootMargin: rootMargin ?? "0px",
      threshold: threshold ?? 1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          //  trigger callback to each entry if cb is provided
          onVisible && onVisible();
        }
      });
    }, options);
    observer.observe(ref.current);

    // clean up when the component is unmounted
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, onVisible]);

  return [isVisible];
}
