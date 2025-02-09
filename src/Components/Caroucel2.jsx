import React, { useState } from "react";
import { color, motion } from "framer-motion";
import imageSliderTwo1 from "../images/imageSliderTwo1.svg";
import imageSliderTwo2 from "../images/imageSliderTwo2.svg";
import imageSliderTwo3 from "../images/imageSliderTwo3.svg";
import CartSlider from "./CartSlider";
function Caroucel2() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const handleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  const images = [
    imageSliderTwo1,
    imageSliderTwo2,
    imageSliderTwo3,
    imageSliderTwo2,
    imageSliderTwo1,
  ];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imagevariants = {
    center: {
      zIndex: 8,
      rotate: 0,
      // color: "blue",
    },
    left1: {
      zIndex: 5,
      rotate: 10,
      // color: "red",
    },
    left: {
      zIndex: 3,
      rotate: 20,
      // color: "orange",
    },
    right: {
      zIndex: 3,
      rotate: -20,
      // color: "green",
    },
    right1: {
      zIndex: 5,
      rotate: -10,
      // color: "yellow",
    },
  };
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-5 ">
      <div className="flex justify-center items-center felx-col h-screen md:h-[65vh] w-[75vw] p-5 scale-[0.9] md:scale-[1]  ">
        {images.map((image, index) => (
          <CartSlider
            image={image}
            key={index}
            initial="center" // Pass initial state
            animate={positions[positionIndex[index]]} // Pass animate state
            variants={imagevariants} // Pass variants
            transition={{ duration: 0.5 }} // Pass transition
            // rotate={imagevariants[positions[positionIndex[index]]].rotate} // Pass rotate
            // zIndex={imagevariants[positions[positionIndex[index]]].zIndex} // Pass zIndex
          />
        ))}
        {/* <CartSlider zIndex="5" rotate="10" />
        <CartSlider zIndex="3" rotate="20" />
        <CartSlider zIndex="8" rotate="0" />
        <CartSlider zIndex="3" rotate="-20" />
        <CartSlider zIndex="5" rotate="-10" /> */}
      </div>
      <div>
        <button
          onClick={handleNext}
          className="capitalize rounded-xl poi bg-black text-2xl text-white  pt-1 pb-1 pr-4 pl-4"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Caroucel2;
