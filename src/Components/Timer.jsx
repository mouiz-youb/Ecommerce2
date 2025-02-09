import React from "react";
import { Link } from "react-router-dom";
import Scwer from "./Scwer";
import { motion } from "framer-motion";
import { fadeIn } from "../Hook/variants.js";
function Timer() {
  return (
    <motion.div className="flex capitalize justify-between items-start p-2.5 flex-col row-start-1 row-end-2  md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-1  ">
      <div className="flex justify-center items-start flex-col gap-2.5 p-2.5">
        <p className="text-3xl">Deals Of The Month</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          quia, repellendus impedit perferendis dignissimos quo voluptatibus
          ducimus ratione maiores autem numquam ab placeat corporis labore ea
          assumenda molestiae, consequuntur iure!
        </p>
        <Link className="text-white bg-black rounded-2xl pt-1.5 pb-1.5 pr-4 pl-4">
          buy now
        </Link>
      </div>
      <div className="flex justify-center flex-row items-start p-2.5 gap-2.5">
        <Scwer text="day" nmb="02" />
        <Scwer text="hr" nmb="06" />
        <Scwer text="mins" nmb="05" />
        <Scwer text="sc" nmb="30" />
      </div>
    </motion.div>
  );
}

export default Timer;
