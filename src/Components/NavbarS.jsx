import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import Menu from "./Menu";
import "../App.css";
function NavbarS() {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click);
  return (
    <div className="flex items-center justify-between border w-screen p-2.5 -z-0 relative">
      <p>Logo</p>
      <div>
        <TfiAlignJustify
          className={Click ? `text-white z-10` : `text-black`}
          onClick={handleClick}
        />
        {Click ? <Menu /> : null}
      </div>
    </div>
  );
}

export default NavbarS;
