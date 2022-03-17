import { useEffect, useRef, useState } from "react";

export default function useOnScreen(options) {
  // direct reference to the DOM Element itself.
  const targetRef = useRef();
  // stored value of that reference intersecting the IntersectionObserver API.
  const [isIntersecting, setIntersectig] = useState(false);

  // when this component is mounted do this.
  useEffect(() => {
    console.log();
    const observer = new IntersectionObserver(([entry]) => {
      // sets to true if the referenced element is intersecting the observer.
      setIntersectig(entry.isIntersecting);
      // this options is passed with the values of when to trigger THIS callback.
    }, options);

    // if THERE IS an element do this.
    if (ref) observer.observe(ref);
    // notify if that element is visisble on screen.

    // clean up, when the element has finally been intersepted unmount the custom hook.
    return () => {
      if (ref) observer.unobserve(ref);
    };
    //[ref, options] to constantly check, leave empty [] to run it once.
  }, [ref, options]);

  // Setter & Checker
  return [setRef, isIntersecting];
}
