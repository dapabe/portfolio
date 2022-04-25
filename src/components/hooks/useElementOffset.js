import { useMemo, useEffect, useState } from "react";
import useToggle from "./useToggle";

//  [NOTE]  Calculate pixel distance between
//          a HTMLElement and its parent
//          container.
//          Returns a boolean indicating when
//          the target's offset has reached
//          the pixel value.

export default function useElementOffset(options = {}) {
  const {
    parent = null,
    target = null,
    pixels = globalThis.innerHeight,
  } = options;

  const [isOffset, handleOffset] = useToggle(false); //  false

  const newContainer = useMemo(() => {
    return parent ?? window;
  }, [parent]);

  const targetOffset =
    target ??
    target?.offsetTop ??
    (globalThis.scrollY || globalThis.pageYOffset);

  const checkTopScroll = () => {
    if (!isOffset && targetOffset >= pixels) return handleOffset();
    if (isOffset && targetOffset <= pixels) return handleOffset();
  };

  useEffect(() => {
    console.log(targetOffset, pixels, isOffset);
    window.addEventListener("scroll", checkTopScroll);
    return () => window.removeEventListener("scroll", checkTopScroll);
  }, [targetOffset]);

  return { isOffset };
}
