import React, { useState } from "react";
import { fadeIn } from "../Hook/variants.js";
import { motion } from "framer-motion";
import Button from "./Button";
function PeakyBlinderRight() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (content) => {
    setActiveButton(content);
  };
  return (
    <div className="flex justify-center items-start p-5 gap-2.5 flex-col capitalize">
      <motion.p
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="text-gray-400"
      >
        woman collection{" "}
      </motion.p>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="text-4xl text-gray-800"
      >
        Peaky Blinders
      </motion.p>
      <motion.p
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="uppercase text-xl "
      >
        description
      </motion.p>
      <motion.p
        variants={fadeIn("right", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="text-sm text-gray-400"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        dolores, ad dolorem aliquid veniam in. Consectetur, nulla. Eum, ducimus
        voluptatibus odit veritatis quibusdam commodi, hic amet eaque fuga ipsa
        porro.
      </motion.p>
      <motion.div
        variants={fadeIn("right", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="flex  capitalize justify-center flex-row items-start gap-1.5"
      >
        <p className="text-gray-400">size : </p>
        <p className="text-white bg-black pl-2 pr-2  rounded-xl">m</p>
      </motion.div>
      <motion.p
        variants={fadeIn("right", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}
        className="text-xl"
      >
        $100.00
      </motion.p>
      <Button
        content="buy now "
        isActive={activeButton === "man fashion"}
        onClick={() => handleButtonClick("man fashion")}
      />
    </div>
  );
}

export default PeakyBlinderRight;
