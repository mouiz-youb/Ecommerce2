import React from "react";
import PerfectImageGalery from "./PerfectImageGalery";
import { fadeIn } from "../Hook/variants";
import { motion } from "framer-motion";
function Galory() {
  return (
    <motion.div className="flex justify-center items-center flex-col gap-5 p-5 ml-8 ">
      <div className="flex justify-center items-center flex-col gap-5">
        <p className="text-4xl">Follow Us On Instagram</p>
        <p className="text-sm text-gray-400 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <PerfectImageGalery />
    </motion.div>
  );
}

export default Galory;
