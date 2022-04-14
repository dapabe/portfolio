import { useEffect, useCallback } from "react";

//  [NOTE]  Just 1 use case.
//  [TODOif] Search for a way to map parameters(Obj),
//  ex: ([key]: [func()])-> map it into the "execGlobalFunc"
//      event.key === [key] && [prop]() ?
//  Parameters should be a spreaded object.
export default function useKeyboard(callback) {
  const execGlobalFunc = useCallback(
    (event) => {
      event.key === "m" && callback();
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", execGlobalFunc, false);

    return () => document.removeEventListener("keydown", execGlobalFunc, false);
  }, [execGlobalFunc]);
}
