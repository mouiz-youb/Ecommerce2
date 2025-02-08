import React from "react";

function PubCart(props) {
  return (
    <div className="flex justify-center items-center flex-row gap-4 p-2">
      <div>
        <img src={props.icon} alt="" />
      </div>
      <div className="flex justify-center items-start flex-col gap-2">
        <p>{props.content1}</p>
        <p>{props.content2}</p>
      </div>
    </div>
  );
}

export default PubCart;
