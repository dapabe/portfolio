import { useCallback, useState, useMemo } from "react";

export default function useToggle(initialState = false) {
  const [initialValue, setValue] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const memoizedValue = useMemo(() => initialValue, [initialValue]);
  const Toggle = useCallback(
    () => setValue((memoizedValue) => !memoizedValue),
    []
  );

  return [memoizedValue, Toggle];
}
