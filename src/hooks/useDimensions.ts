import { MutableRefObject, useEffect, useRef } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref: MutableRefObject<HTMLElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current?.getBoundingClientRect().width ?? 0
    dimensions.current.height = ref.current?.getBoundingClientRect().height ?? 0
  }, []);

  return dimensions.current;
};