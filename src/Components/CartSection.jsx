import React from "react";
import Cart from "./Cart";
import CartImage1 from "../images/CartImage1.svg";
import CartImage2 from "../images/CartImage2.svg";
import CartImage3 from "../images/CartImage3.svg";
import CartImage4 from "../images/CartImage4.svg";
import CartImage5 from "../images/CartImage5.svg";
import CartImage6 from "../images/CartImage6.svg";
function CartSection() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-8 flex-col p-8 md:flex-row">
      <Cart content="Shiny Dress" content2="Al Karam" image={CartImage1} />
      <Cart content="Long Dress" content2="Al Karam" image={CartImage2} />
      <Cart content="Full Sweater" content2="Al Karam" image={CartImage3} />
      <Cart content="White Dress" content2="Al Karam" image={CartImage4} />
      <Cart content="Colorful Dress" content2="Al Karam" image={CartImage5} />
      <Cart content="White Shirt" content2="Al Karam" image={CartImage6} />
    </div>
  );
}

export default CartSection;
