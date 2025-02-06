import React, { useState, useEffect } from "react";
import NavbarT from "./NavbarT";
import NavbarS from "./NavbarS.jsx";
import { useResized } from "../Hook/UseResized.js";
function NavBar() {
  const [resized, setResized] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResized(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(resized);
  return <>{resized <= 640 ? <NavbarS /> : <NavbarT />}</>;
}

export default NavBar;
