import { useEffect } from "react";
const body = document.body.style;

export default function useNoScroll(conditionToCheck = false) {
  const ScrollFlow = (condition) => {
    condition ? (body.overflowY = "hidden") : (body.overflow = "auto");
  };
  useEffect(() => {
    ScrollFlow(conditionToCheck);
    return () => ScrollFlow(conditionToCheck);
  }, [conditionToCheck]);
}
