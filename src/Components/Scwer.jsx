import React from "react";

function Scwer(props) {
  return (
    <div className="flex capitalize justify-center items-center gap-1.5 flex-col ">
      <p className="p-1.5  rounded-xl shadow-xl text-2xl ">{props.nmb}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default Scwer;
