import React from "react";
import Caroucel2 from "./Caroucel2";
function Customers() {
  return (
    <div className="flex justify-center items-center flex-col gap-2.5 w-full p-2  bg-gray-100">
      <div className="flex justify-center items-center flex-col gap-2.5">
        <p className="text-2xl md:text-4xl"> This Is What Our Customers Say</p>
        <p className="text-[10px] text-gray-500 md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
      </div>
      <Caroucel2 />
    </div>
  );
}

export default Customers;
