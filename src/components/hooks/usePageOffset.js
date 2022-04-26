import { useEffect, useState } from "react";
export default function usePageOffset(pixels = window.innerHeight) {
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
