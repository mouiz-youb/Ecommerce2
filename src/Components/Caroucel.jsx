import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Hook/variants.js";
import imageSlider1 from "../images/imageSlider1.svg";
import imageSlider2 from "../images/imageSlider2.svg";
import "../index.css";
function Caroucel() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const handleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  const images = [
    imageSlider1,
    imageSlider2,
    imageSlider1,
    imageSlider1,
    imageSlider2,
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
    <motion.div className=" flex  justify-center items-center flex-col gap-2 row-start-2 row-end-3 md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-1 ">
      <div className="flex justify-center items-center flex-col gap-2.5 relative h-full scale-[0.5] w-full">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            className="absolute rounded-2xl"
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={imagevariants}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <button
          onClick={handleNext}
          className="capitalize rounded-xl poi bg-black text-2xl text-white  pt-1 pb-1 pr-4 pl-4"
        >
          next
        </button>
      </div>
    </motion.div>
  );
}

export default Caroucel;
