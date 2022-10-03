import { useCallback, useState } from "react";
/**
 * 
 * @param {Boolean} init False
 * 
 */
export default function useToggle(init = false) {
  const [initialValue, setValue] = useState(init);

  const toggle = useCallback(() => setValue((prevState) => !prevState), [init]);

  return [initialValue, toggle];
}
