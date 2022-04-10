import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

function useObserver(
  targetRef,
  { root, threshold, rootMargin, runOnce, onVisible }
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
useObserver.defaultProps = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
  runOnce: true,
};

useObserver.propTypes = {
  targetRef: PropTypes.node.isRequired,
  root: PropTypes.node,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  runOnce: PropTypes.boolean,
  onVisible: PropTypes.func,
};

export default useObserver;
