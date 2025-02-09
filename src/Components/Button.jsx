import React, { useState } from "react";
import "../index.css";
import { fadeIn } from "../Hook/variants.js";
import { motion } from "framer-motion";
function Button(props) {
  return (
    <motion.div
      variants={fadeIn("right", 1.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.9 }}
      className={`rounded-xl p-1.5 flex justify-center items-center poi ${
        props.isActive ? `bg-black text-white` : `bg-gray-300 text-gray-600 `
      }`}
      onClick={props.onClick}
    >
      {props.content}
    </motion.div>
  );
}

export default Button;
