import { useEffect } from "react";

export default function useNoScroll(conditionToCheck = false) {
  const ScrollFlow = (value) => {
    document.body.style.overflowY = value;
  };
  useEffect(() => {
    conditionToCheck && ScrollFlow("hidden");
    return () => ScrollFlow("unset");
  }, [conditionToCheck]);
}
