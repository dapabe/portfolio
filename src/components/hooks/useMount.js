import { useEffect } from "react";
import useToggle from "./useToggle";

export default function useMount() {
  const [isMounted, handleMount] = useToggle(false);

  useEffect(() => {
    handleMount();
    return handleMount;
  }, [isMounted]);

  return { isMounted };
}
