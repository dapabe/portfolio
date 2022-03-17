import { useEffect, useRef } from "react";

export default function useOnResize() {
  const screenSize = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      screenSize.current = window.innerWidth;
    });
    return () => {
      window.removeEventListener("resize", () => {
        screenSize.current = window.innerWidth;
      });
    };
  }, [screenSize]);

  return screenSize.current <= 800;
}
