import { useState, useEffect, useMemo } from "react";

export default function usePageOffset(pixels = window.innerHeight, target) {
  const elements = useMemo(() => target, []);
  const [isOffset, setOffset] = useState(false);
  const checkTopScroll = () => {
    !isOffset && window.pageYOffset >= pixels && setOffset(true);
    isOffset && window.pageYOffset <= pixels && setOffset(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", checkTopScroll);
    return () => window.removeEventListener("scroll", checkTopScroll);
  }, [isOffset]);

  return { isOffset };
}
