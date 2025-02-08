import React from "react";
import Description from "../Components/Description";
import Description2 from "../Components/Description2";
import SliderSection from "../Components/SliderSection";
import NewArrivals from "../Components/NewArrivals";
import PeakyBlinders from "../Components/PeakyBlinders";
import PubSection from "../Components/PubSection";
import Galory from "../Components/Galory";
function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      {/* <Description /> */}
      <Description2 />
      <SliderSection />
      <NewArrivals />
      <PeakyBlinders />
      <PubSection />
      <Galory />
    </div>
  );
}

export default Home;
