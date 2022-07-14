import { useEffect, useCallback } from "react";

//  [NOTE]  This function searches for a form element,
//            if the element is focused then the callback
//            function will not trigger.

const isFocusingForm = (event) => ["TEXTAREA", "INPUT"].some(val => event.target.nodeName === val)

export default function useKeyboard(keyOptions) {
  const { element = globalThis, key, cb, condition = true } = keyOptions;
  const execGlobalFunc = useCallback(
    (event) => {
      if (!isFocusingForm(event)) event.key === key && cb();
    },
    [key]
  );
  useEffect(() => {
    if (condition) element.addEventListener("keydown", execGlobalFunc, false);
    return () => element.removeEventListener("keydown", execGlobalFunc, false);
  }, []);
}
