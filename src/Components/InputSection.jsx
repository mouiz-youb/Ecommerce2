import React, { useState } from "react";
import Button from "./Button";

function InputSection() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (content) => {
    setActiveButton(content);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <p className="text-2xl"> Subscribe To Our Newsletter</p>
      <p className="text-gray-300 text-sm text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </p>
      <input
        type="text"
        className="w-full rounded-xl shadow-2xl p-3"
        placeholder="michael@ymail.com"
      />
      <Button
        content="Subscribe Now"
        isActive={activeButton === "Subscribe Now"}
        onClick={() => handleButtonClick("Subscribe Now")}
      />
    </div>
  );
}

export default InputSection;
