import { useCallback, useState } from "react";

export default function useToggle(init = false) {
  const [initialValue, setValue] = useState(init);

  const toggle = useCallback(() => setValue((prevState) => !prevState), [init]);

  return [initialValue, toggle];
}
