import { useState, useEffect } from "react";

export default function usePageOffset(pixels = window.innerHeight) {
  const [hasOffset, setOffset] = useState(false);
  function checkTopScroll() {
    if (!hasOffset && window.pageYOffset >= pixels) return setOffset(true);
    if (hasOffset && window.pageYOffset <= pixels) return setOffset(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkTopScroll);

    return () => {
      window.removeEventListener("scroll", checkTopScroll);
    };
  });

  return hasOffset;
}
