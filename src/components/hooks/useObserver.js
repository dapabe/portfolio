import { useEffect, useMemo, useState } from "react";

function useObserver(
  targetRef,
  { root = null, threshold = 1, rootMargin = "0px", runOnce = true, onVisible }
) {
  const ref = useMemo(() => targetRef);
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
          //  conditional triggers.
          runOnce && observer.unobserve(entry.target);
          onVisible && onVisible();
        }
      });
    }, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, runOnce, onVisible]);

  return [isVisible];
}

export default useObserver;
