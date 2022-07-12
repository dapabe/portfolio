import { useEffect, useCallback, useState } from "react";

//  [NOTE]  Just 1 use case.
//  [TODO] Search for a way to map parameters(Obj),
//  ex: ([key]: [func()])-> map it into the "execGlobalFunc"
//      event.key === [key] && [prop]() ?
//  Parameters should be a spreaded object.

export default function useKeyboard(keyOptions) {
  const { element = globalThis, key, cb, condition = true } = keyOptions;
  const [] = useState(null)
  const execGlobalFunc = useCallback(
    (event) => {
      event.key === key && cb();
      console.log(event)
      //  mirar event.target si es un input
      // if (event)
    },
    [key]
  );
  useEffect(() => {
    if (condition) element.addEventListener("keydown", execGlobalFunc, false);
    return () => element.removeEventListener("keydown", execGlobalFunc, false);
  }, []);
}
