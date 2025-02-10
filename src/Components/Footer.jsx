import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 md:flex-row m-4 md:justify-evenly w-full md:p-5 ">
      <div className="flex justify-center items-center ">
        <p className="text-3xl">Fasco</p>
      </div>
      <div className="flex justify-center items-center flex-col gap-3 text-sm text-gray-300 md:flex-row">
        <p>Support Center</p>
        <p>Invoicing</p>
        <p>Contract</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>FAQ,s</p>
      </div>
    </div>
  );
}

export default Footer;
