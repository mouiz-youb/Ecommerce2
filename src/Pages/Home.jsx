import React from "react";
import Description from "../Components/Description";
import Description2 from "../Components/Description2";
import SliderSection from "../Components/SliderSection";
function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* <Description /> */}
      <Description2 />
      <SliderSection />
    </div>
  );
}

export default Home;
