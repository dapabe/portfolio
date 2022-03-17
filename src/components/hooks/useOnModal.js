import { useEffect } from "react";

export default function useOnModal(conditionToCheck) {
  useEffect(() => {
    conditionToCheck
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflow = "unset");
  }, [conditionToCheck]);
}
