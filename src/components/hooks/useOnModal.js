import { useEffect } from "react";

export default function useOnModal(conditionToCheck) {
  useEffect(() => {
    conditionToCheck && (document.body.style.overflowY = "hidden");

    return () => {
      !conditionToCheck && (document.body.style.overflowY = "unset");
    };
  }, [conditionToCheck]);
}
