import { useEffect } from "react";

export default function useNoScroll(conditionToCheck = false) {
  useEffect(() => {
    const ScrollFlow = (condition) => {
      const body = document.body.style;
      // if (typeof window !== "undefined") {
      return condition
        ? (body.overflowY = "hidden")
        : (body.overflowY = "auto");
      // }
    };
    ScrollFlow(conditionToCheck);
    return () => ScrollFlow(conditionToCheck);
  }, [conditionToCheck]);
}
