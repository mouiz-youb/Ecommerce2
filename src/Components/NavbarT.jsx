import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
function NavbarT() {
  return (
    <div className="flex justify-between items-center flex-row gap-5 w-screen p-2 lg:justify-evenly lg:text-2xl">
      <p>logo</p>
      <div className="flex justify-center items-center flex-row gap-6 ">
        <Link to="/">home</Link>
        <Link to="/">about us</Link>
        <Link to="/">shop</Link>
        <Link to="/">new</Link>
        <Link to="/">contact us</Link>
      </div>
      <div>
        <Link className="text-gray-700    rounded-2xl w-[120px] h-[30px] flex justify-center items-center shad2">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default NavbarT;
