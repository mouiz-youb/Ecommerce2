import React from "react";
import InputSection from "./InputSection";
import Man from "../images/Man.svg";
import Woman from "../images/Woman.svg";
function Subscreption() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:flex-row p-5">
      <div>
        <img src={Man} alt="" />
      </div>
      <InputSection />
      <div>
        <img src={Woman} alt="" />
      </div>
    </div>
  );
}

export default Subscreption;
