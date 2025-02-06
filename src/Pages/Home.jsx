import React from "react";
import Description from "../Components/Description";
import SliderSection from "../Components/SliderSection";
function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Description />
      <SliderSection />
    </div>
  );
}

export default Home;
