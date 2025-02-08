import React, { useState } from "react";
import { motion } from "framer-motion";
import imageSliderTwo1 from "../images/imageSliderTwo1.svg";
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
    imageSliderTwo1,
    imageSliderTwo1,
    imageSliderTwo1,
    imageSliderTwo1,
  ];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imagevariants = {
    center: {
      x: "0",
      scale: 0.8,
      zIndex: 5,
    },
    left1: {
      x: "-50%",
      scale: 0.5,
      zIndex: 2,
    },
    left: {
      zIndex: 1,
      scale: 0.3,
      x: "-90%",
    },
    right: {
      zIndex: 1,
      scale: 0.3,
      x: "90%",
    },
    right1: {
      zIndex: 2,
      scale: 0.5,
      x: "50%",
    },
  };
  return (
    <div className="flex justify-center items-center flex-col gap-2 w-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative rounded-2xl h-full w-full"
          initial="center"
          animate={positions[positionIndex[index]]}
          variants={imagevariants}
          transition={{ duration: 0.5 }}
        >
          <CartSlider image={image} />
        </motion.div>
      ))}
      <button
        onClick={handleNext}
        className="capitalize rounded-xl poi bg-black text-2xl text-white  pt-1 pb-1 pr-4 pl-4 z-50"
      >
        next
      </button>
    </div>
  );
}

export default Caroucel2;
