import React from "react";
import ButtonSection from "./ButtonSection";
import CartSection from "./CartSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Hook/variants.js";
function NewArrivals() {
  return (
    <div className="flex justify-center items-center flex-col gap-2.5 p-2 ">
      <motion.div
        variants={fadeIn("top", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="flex justify-center items-center flex-col gap-2.5  p-2.5"
      >
        <h1 className="text-2xl">New Arrivals</h1>
        <p className="text-[10px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          quasi a ea necessitatibus cum quidem sed porro ipsa atque. Molestias
          aliquid nostrum dolor. Ducimus, ipsum at! Nam, porro? Vel, minus.
        </p>
      </motion.div>
      <ButtonSection />
      <CartSection />
      <Link className="rounded-xl pl-5 pr-5 pt-2 pb-2 text-sm flex justify-center items-center poi text-white bg-black ">
        View More{" "}
      </Link>
    </div>
  );
}

export default NewArrivals;
