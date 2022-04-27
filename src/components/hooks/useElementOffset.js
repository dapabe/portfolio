import { useMemo, useEffect, useState, useCallback } from "react";
import useToggle from "./useToggle";

//  [NOTE]  Refactor for parallax usage.
//  This function has to be able to detect
//  how if a certain threshold in pixels has been
//  reached from the parent container.
//  Container must be scrollable.
//  EX; <container>         <-- ref.offsetParent
//        <target ref/>
//      </container>
export default function useElementOffset(
  targetRef,
  pixels = globalThis.innerHeight
) {
  const [values, setValues] = useState({ obj: null, p: pixels });
  const [isOffset, handleOffset] = useToggle(false);

  // if (targetRef?.current ?? true) throw new Error("ref is empty or undefined");
  const targetOffset = values.p;
  const checkScroll = useCallback(() => {
    !isOffset && targetOffset > pixels && handleOffset();
    isOffset && targetOffset < pixels && handleOffset();
  }, [targetOffset]);

  console.log(values, targetOffset);
  useEffect(() => {
    console.log(values, targetOffset);
    setValues({
      obj: targetRef?.current,
      p: targetRef?.current?.scrollTop ?? globalThis.scrollY,
    });
    return () => setValues({ obj: null, p: pixels });
  }, [values.obj]);

  return { isOffset, checkScroll };
}
