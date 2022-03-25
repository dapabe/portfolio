import { useState, useEffect } from "react";

export default function usePageScrolled() {
  const [showScroll, setShowScroll] = useState(false);
  function checkTopScroll() {
    if (!showScroll && window.pageYOffset > 400) return setShowScroll(true);
    if (showScroll && window.pageYOffset <= 400) return setShowScroll(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkTopScroll);

    return () => {
      window.removeEventListener("scroll", checkTopScroll);
    };
  });

  return showScroll;
}
