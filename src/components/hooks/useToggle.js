import { useCallback, useState } from "react";

export default function useToggle(initialState = false) {
  const [initialValue, setValue] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const Toggle = useCallback(
    () => setValue((initialValue) => !initialValue),
    []
  );

  return [initialValue, Toggle];
}
