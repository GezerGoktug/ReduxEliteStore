import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollHandle = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandle);
    scrollHandle();
    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
