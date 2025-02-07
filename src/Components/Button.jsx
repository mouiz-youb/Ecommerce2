import React, { useState } from "react";
import "../index.css";
function Button(props) {
  const [click, setclick] = useState(false);
  const handlechange = () => {
    setclick((prev) => !prev);
  };
  return (
    <div
      className={`rounded-xl p-1.5 flex justify-center items-center poi ${
        props.isActive ? `bg-black text-white` : `bg-gray-300 text-gray-600 `
      }`}
      onClick={props.onClick}
    >
      {props.content}
    </div>
  );
}

export default Button;
