import { useMemo, useEffect, useState } from "react";
import useToggle from "./useToggle";

//  [NOTE]  Refactor

export default function useElementOffset(options = {}) {
  const { target, pixels = globalThis.innerHeight } = options;

  // const [isOffset, setOffset] = useState(false); //  false
  const [isOffset, handleOffset] = useToggle(false);
  // const newContainer = useMemo(() => {
  //   return parent ?? window;
  // }, [parent]);

  // console.log(target.current?.offsetTop);
  const targetOffset = target?.offsetTop ?? globalThis.scrollY;

  console.log(targetOffset);
  const checkTopScroll = () => {
    targetOffset > pixels && handleOffset();
    console.log(targetOffset > pixels);
  };

  useEffect(() => {
    // console.log(target.current.offsetTop, pixels, options);
    window.addEventListener("scroll", checkTopScroll);

    return () => window.removeEventListener("scroll", checkTopScroll);
  }, [isOffset]);

  return { isOffset };
}
