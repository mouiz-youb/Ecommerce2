import React from "react";
import imageSliderTwo1 from "../images/imageSliderTwo1.svg";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";

function CartSlider(props) {
  return (
    <motion.div
      initial={props.initial} // Apply initial animation state
      animate={props.animate} // Apply animate state
      variants={props.variants} // Apply animation variants
      transition={props.transition} // Apply transition settings
      className={`flex justify-center items-center flex-col gap-5 md:flex-row border-2 bg-white rounded-2xl md:w-[50%] absolute p-5 ml-5 mr-5`}
      style={{
        transform: `rotate(${props.rotate || 0}deg)`, // Apply rotation from props (default to 0 if not provided)
        zIndex: `${props.zIndex || 1}`, // Apply zIndex from props (default to 1 if not provided)
      }}
    >
      <div className="flex justify-center items-center p-2">
        <img src={props.image} alt="" className="w-[200px] md:w-[300px]" />
      </div>
      <div className="flex justify-center items-start gap-3.5 flex-col p-2.5">
        <p className="text-sm">
          "You won't regret it. I would like to personally thank you for your
          outstanding product. Absolutely wonderful!"
        </p>
        <div className="flex justify-center items-center gap-1.5 flex-row">
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
        </div>
        <p className="text-2xl">James K</p>
        <p className="text-sm">Traveler</p>
      </div>
    </motion.div>
  );
}

export default CartSlider;
