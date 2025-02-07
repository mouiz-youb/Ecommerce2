import React from "react";
import Caroucel from "./Caroucel";
import Timer from "./Timer";
function SliderSection() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1 md:gap-4 ">
      <Timer />
      <Caroucel />
    </div>
  );
}

export default SliderSection;
