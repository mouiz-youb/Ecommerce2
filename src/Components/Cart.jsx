import React from "react";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../Hook/variants.js";
function Cart(props) {
  return (
    <motion.div className="flex justify-center items-center flex-col gap-5 shadow-2xl rounded-2xl p-3">
      <div>
        <img src={props.image} alt="" />
      </div>
      <div className="flex justify-between items-center flex-row w-full p-2 ">
        <div className="flex justify-start items-center flex-col ">
          <p>{props.content}</p>
          <p className="text-[10px]">{props.content2}</p>
        </div>
        <div className="flex justify-center items-center gap-1.5 flex-row ">
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
          <IoIosStar className="text-yellow-300" />
        </div>
      </div>
      <div className="flex justify-start items-center w-full  ">
        <p>(4.1k) Customer Reviews</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <p>$95.50</p>
        <p className="text-red-400">Almost Sold Out</p>
      </div>
    </motion.div>
  );
}

export default Cart;
