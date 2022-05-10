import { useEffect, useState } from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? globalThis.innerWidth : 1200,
    height: isSSR ? globalThis.innerHeight : 800,
  });

  function changeWindowSize() {
    setWindowSize({
      width: globalThis.innerWidth,
      height: globalThis.innerHeight,
    });
  }

  useEffect(() => {
    globalThis.addEventListener("resize", changeWindowSize);
    return () => globalThis.removeEventListener("resize", changeWindowSize);
  }, [changeWindowSize]);

  return { windowSize };
}
