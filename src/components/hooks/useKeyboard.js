import { useEffect, useCallback } from "react";

const isFocusingInput = (event) =>
  ["TEXTAREA", "INPUT"].some((val) => event.target.nodeName === val);
/**
 *  Trigger the callback function given the specified
 *  key.
 *
 *  [acceptInput: false] Set to "true" if you want an action to occur while writing on inputs
 * */
export default function useKeyboard({
  element = globalThis,
  key,
  cb,
  condition = true,
  acceptInput = false,
}) {
  const execGlobalFunc = useCallback(
    (event) => {
      if (acceptInput) event.key === key && cb();
      else if (!isFocusingInput(event)) event.key === key && cb();
    },
    [key]
  );
  useEffect(() => {
    if (condition) element.addEventListener("keydown", execGlobalFunc, false);
    return () => element.removeEventListener("keydown", execGlobalFunc, false);
  }, [acceptInput]);
}
