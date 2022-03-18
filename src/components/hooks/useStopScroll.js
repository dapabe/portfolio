import { useEffect } from "react";

export default function useStopScroll(conditionToCheck) {
  useEffect(() => {
    conditionToCheck && (document.body.style.overflowY = "hidden");
    !conditionToCheck && (document.body.style.overflowY = "unset");
  }, [conditionToCheck]);
}
