import React from "react";
import Description from "../Components/Description";
import Description2 from "../Components/Description2";
import SliderSection from "../Components/SliderSection";
import NewArrivals from "../Components/NewArrivals";
function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      {/* <Description /> */}
      <Description2 />
      <SliderSection />
      <NewArrivals />
    </div>
  );
}

export default Home;
