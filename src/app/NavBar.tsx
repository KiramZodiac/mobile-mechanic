import React from "react";

function NavBar() {
  return (
    <div className=" text-blue-700  float-right w-2/6 pt-5  ">
      <div className="  space-x-5 mr-30  flex  p-1 pr-7 text-2xl fixed">
        <ul className=" hover:font-bold">
          <a href="">Home</a>
        </ul>
        <ul className="  hover: hover:text-blue-600 hover:font-bold">
          <a href="">Find a Mechanic</a>
        </ul>
        <ul className="  hover:text-blue-600 hover:font-bold">
          <a href="">Services</a>
        </ul>
        <ul className=" hover: hover:text-blue-600  hover:font-bold">
          <a href="">About us</a>
        </ul>
        <ul className=" hover: hover:text-blue-600 hover:font-bold">
          <a href="">Contact</a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
