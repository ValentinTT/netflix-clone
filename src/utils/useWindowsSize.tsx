import { useEffect, useState } from "react";

type WindowDimensions = {
  width: number;
  height: number;
};

export default function useWindowsSize(): WindowDimensions {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 0 : window.innerWidth,
    height: isSSR ? 0 : window.innerHeight,
  });

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  });

  return windowSize;
}
