import { useState, useEffect } from "react";
export const useResized = () => {
  const [resized, setResized] = useState(window.innerWidth);
  const resizing = () => {
    useEffect(() => {
      const handleResize = () => {
        setResized(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  };
  return resized;
};
