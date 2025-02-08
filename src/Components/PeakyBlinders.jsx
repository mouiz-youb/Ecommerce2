import React from "react";
import PeakyBlinderLeft from "./PeakyBlinderLeft";
import PeakyBlinderRight from "./PeakyBlinderRight";
import "../index.css";
function PeakyBlinders() {
  return (
    <div className="flex justify-center items-center flex-col p-2  ml-5 gap-4 after overflow-hidden relative md:grid md:grid-cols-2 md:grid-rows-1 md:gap-5 m-5 ">
      <PeakyBlinderLeft />
      <PeakyBlinderRight />
    </div>
  );
}

export default PeakyBlinders;
