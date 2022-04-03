import { useState, useEffect } from "react";

export default function usePageOffset(pixels = window.innerHeight) {
  const [hasOffset, setOffset] = useState(false);
  const checkTopScroll = () => {
    !hasOffset && window.pageYOffset >= pixels && setOffset(true);
    hasOffset && window.pageYOffset <= pixels && setOffset(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkTopScroll);

    return () => {
      window.removeEventListener("scroll", checkTopScroll);
    };
  }, [hasOffset]);

  return hasOffset;
}
