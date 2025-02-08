import React from "react";
import PubCart from "./PubCart";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
function PubSection() {
  return (
    <div className="flex justify-start ml-[45px] rounded-2xl items-center flex-wrap p-5 gap-8 flex-row m-5  w-full bg-white shadow-2xl md:justify-evenly">
      <PubCart
        content1="High Quality"
        content2="crafted from top materials"
        icon={icon1}
      />
      <PubCart
        content1=" Warrany Protection"
        content2="Over 2 years"
        icon={icon2}
      />
      <PubCart
        content1="  Free Shipping"
        content2=" Order over 150 $"
        icon={icon3}
      />
      <PubCart
        content1=" 24 / 7 Support"
        content2=" Dedicated support"
        icon={icon4}
      />
    </div>
  );
}

export default PubSection;
