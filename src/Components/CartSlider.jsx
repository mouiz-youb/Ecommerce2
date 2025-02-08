import React from "react";
import imageSliderTwo1 from "../images/imageSliderTwo1.svg";

function CartSlider(props) {
  return (
    <div className="border-2 grid grid-cols-3 grid-rows-1 p-2 absolute">
      <div className="col-start-1 col-end-2 border-2">
        <img src={props.image} alt="" />
      </div>
      <div className="col-start-2 col-end-4 border-2">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non alias
          amet est accusantium, saepe eaque corporis dicta, aspernatur aut
          suscipit animi praesentium numquam. Fugit ad assumenda quibusdam
          laudantium distinctio deleniti?
        </p>
      </div>
    </div>
  );
}

export default CartSlider;
