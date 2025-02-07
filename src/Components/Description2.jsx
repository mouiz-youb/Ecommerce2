import React, { useState, useEffect } from "react";
import image from "../images/image.svg";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import { Link } from "react-router-dom";
import image3 from "../images/image3.svg";
import "../index.css";
function Description2() {
  const [resized, setResized] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResized(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="  grid grid-cols-1 grid-rows-3 gap-5  md:grid-cols-11 md:grid-rows-10 md:gap-5 ">
      <div className=" col-start-1 col-end-1 row-start-1 rounded-[15px] row-end-2 w-full flex justify-center items-center  md:col-start-2 md:col-end-5 md:row-start-1 md:row-end-10 md:rounded-2xl bg-gray-300  md:flex md:justify-end md:image">
        <img src={image1} alt="" className="" />
      </div>
      <div className=" col-start-1 col-end-1 row-start-2 row-end-3 md:col-start-5 md:col-end-8   md:row-start-1 md:row-end-10 rounded-2xl md:gap-2   flex justify-between items-center  flex-col">
        <div className="bg-gray-300 rounded-2xl flex justify-center items-center">
          {" "}
          <img src={image3} alt="" className="rounded-2xl" />
        </div>
        <div className=" flex justify-between items-center flex-col gap-2.5 capitalize ">
          <p className={resized <= 640 ? `text-3xl ` : `text-5xl `}>ultimate</p>
          <p
            className={`stroke text-white ${
              resized <= 640 ? "text-6xl" : "text-8xl"
            }`}
          >
            {" "}
            sale
          </p>
          <p className="text-[10px]">new collection</p>
          <Link className="bg-black text-white rounded-[5px] text-[10px] shad2 flex justify-center items-center h-[18px] w-[70px] ">
            shop now
          </Link>
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
      </div>
      <div className=" col-start-1 col-end-1 row-start-3 rounded-[15px] row-end-4 md:col-start-8 md:col-end-11  md:row-start-1 md:row-end-10 md:rounded-2xl bg-gray-300  flex justify-end   ">
        <img src={image2} alt="" className=" " />
      </div>
    </div>
  );
}

export default Description2;
