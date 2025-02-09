import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "../Hook/variants.js";
function ButtonSection() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (content) => {
    setActiveButton(content);
  };
  return (
    <motion.div className="flex flex-wrap justify-center gap-2.5 p-2.5 capitalize">
      <Button
        content="man fashion "
        isActive={activeButton === "man fashion"}
        onClick={() => handleButtonClick("man fashion")}
      />
      <Button
        content="wonam fashion"
        isActive={activeButton === "woman fashion"}
        onClick={() => handleButtonClick("woman fashion")}
      />
      <Button
        content="man accesoire"
        isActive={activeButton === "man accessories"}
        onClick={() => handleButtonClick("man accessories")}
      />
      <Button
        content="woman accesoire"
        isActive={activeButton === "woman accessories"}
        onClick={() => handleButtonClick("woman accessories")}
      />
      <Button
        content="discount details "
        isActive={activeButton === "discount details"}
        onClick={() => handleButtonClick("discount details")}
      />
    </motion.div>
  );
}

export default ButtonSection;
