import React from "react";
import { motion } from "framer-motion";
import imageP1 from "../images/imageP1.svg";
import imageP2 from "../images/imageP2.svg";
import imageP3 from "../images/imageP3.svg";
import imageP4 from "../images/imageP4.svg";
import imageP5 from "../images/imageP5.svg";
import imageP6 from "../images/imageP6.svg";
import imageP7 from "../images/imageP7.svg";
function PerfectImageGalery() {
  const images = [
    imageP1,
    imageP2,
    imageP3,
    imageP4,
    imageP5,
    imageP6,
    imageP7,
  ];
  const imagevariants = {
    one: {
      width: 320,
    },
    two: {
      width: 250,
    },
    three: {
      width: 320,
    },
    four: {
      width: 250,
    },
    five: {
      width: 320,
    },
    sex: {
      width: 250,
    },
    seven: {
      width: 320,
    },
  };
  const variantKeys = ["one", "two", "three", "four", "five", "six", "seven"];
  return (
    <div className="flex justify-center items-center flex-col  flex-wrap md:flex-row  ">
      {images.map((image, index) => (
        <motion.img
          src={image}
          className={
            index % 2 === 0
              ? "w-[320px] md:w-1/4 lg:w-1/7 xl:w-1/4" // 320px for even indices (1, 3, 5, 7)
              : "w-[250px] md:w-1/4 lg:w-1/7 xl:w-1/4" // 250px for odd indices (2, 4, 6)
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}

export default PerfectImageGalery;
