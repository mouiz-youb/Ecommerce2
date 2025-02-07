import React from "react";
import ButtonSection from "./ButtonSection";
import Cart from "./Cart";

function NewArrivals() {
  return (
    <div className="flex justify-center items-center flex-col gap-2.5 ">
      <div className="flex justify-center items-center flex-col gap-2.5  p-2.5">
        <h1 className="text-2xl">New Arrivals</h1>
        <p className="text-[10px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          quasi a ea necessitatibus cum quidem sed porro ipsa atque. Molestias
          aliquid nostrum dolor. Ducimus, ipsum at! Nam, porro? Vel, minus.
        </p>
      </div>
      <ButtonSection />
      <Cart />
    </div>
  );
}

export default NewArrivals;
