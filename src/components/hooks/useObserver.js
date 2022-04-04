import { useLayoutEffect, useMemo, useState, createRef } from "react";

export default function useObserver({
  targetRef,
  threshold,
  rootMargin,
  onVisible,
}) {
  const ref = useMemo(() => createRef(), []);
  const [isVisible, setVisible] = useState(false);
  useLayoutEffect(() => {
    // shouldn't happen but makes TS happy
    if (!ref.current) {
      return;
    }

    const options = {
      rootMargin: rootMargin ?? "0px",
      threshold: threshold ?? 1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();

          onVisible && onVisible();
        }
      });
    }, options);

    observer.observe(ref.current);

    // clean up when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, ref, onVisible]);

  return [isVisible];
}
