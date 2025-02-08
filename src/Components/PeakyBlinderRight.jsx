import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
function PeakyBlinderRight() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (content) => {
    setActiveButton(content);
  };
  return (
    <div className="flex justify-center items-start p-5 gap-2.5 flex-col capitalize">
      <p className="text-gray-400">woman collection </p>
      <p className="text-4xl text-gray-800">Peaky Blinders</p>
      <p className="uppercase text-xl ">description</p>
      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        dolores, ad dolorem aliquid veniam in. Consectetur, nulla. Eum, ducimus
        voluptatibus odit veritatis quibusdam commodi, hic amet eaque fuga ipsa
        porro.
      </p>
      <div className="flex  capitalize justify-center flex-row items-start gap-1.5">
        <p className="text-gray-400">size : </p>
        <p className="text-white bg-black pl-2 pr-2  rounded-xl">m</p>
      </div>
      <p className="text-xl">$100.00</p>
      <Button
        content="buy now "
        isActive={activeButton === "man fashion"}
        onClick={() => handleButtonClick("man fashion")}
      />
    </div>
  );
}

export default PeakyBlinderRight;
