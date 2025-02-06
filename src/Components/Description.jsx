import React from "react";
import image from "../images/image.svg";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import { Link } from "react-router-dom";
import image3 from "../images/image3.svg";
import "../index.css";
function Description() {
  return (
    <div className="  grid grid-cols-11 grid-rows-10 gap-5 ">
      <div className="  col-start-2 col-end-5 row-start-1 row-end-10 rounded-2xl bg-gray-300  flex justify-end image">
        <img src={image1} alt="" className="" />
      </div>
      <div className="col-start-5 col-end-8   row-start-1 row-end-10 rounded-2xl   flex justify-between items-center  flex-col">
        <div className="bg-gray-300 rounded-2xl flex justify-center items-center">
          {" "}
          <img src={image3} alt="" className="rounded-2xl" />
        </div>
        <div className=" flex justify-between items-center flex-col gap-2.5 capitalize ">
          <p className="text-4xl">ultimate</p>
          <p className="text-8xl stroke text-white"> sale</p>
          <p className="text-[10px]">new collection</p>
          <Link className="bg-black text-white rounded-[5px] text-[10px] h-[25px] shad2 w-[100px] flex justify-center items-center ">
            shop now
          </Link>
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
      </div>
      <div className="col-start-8 col-end-11  row-start-1 row-end-10 rounded-2xl bg-gray-300  flex justify-end   ">
        <img src={image2} alt="" className=" " />
      </div>
    </div>
  );
}

export default Description;
