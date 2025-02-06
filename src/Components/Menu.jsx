import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";
function Menu() {
  const variant = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center flex-col gap-5 w-[50%] h-[300px] bg-gray-600  absolute top-0 -z-10 right-0"
    >
      <div className="flex justify-center items-center flex-col text-white capitalize gap-2">
        <Link to="/">home</Link>
        <Link to="/">about us</Link>
        <Link to="/">shop</Link>
        <Link to="/">new</Link>
        <Link to="/">contact us</Link>
      </div>
      <div className="flex justify-center items-center flex-row gap-5 ">
        <Link className="text-white shadow-blue-300 bg-gray-800  rounded-2xl w-[75px] flex justify-center items-center shad ">
          log in{" "}
        </Link>
        <Link className="text-white shadow-white bg-gray-800  rounded-2xl w-[75px] flex justify-center items-center shad ">
          signup
        </Link>
      </div>
    </motion.div>
  );
}

export default Menu;
