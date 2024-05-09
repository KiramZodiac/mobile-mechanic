import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className=" text-white  float-right w-2/6 pt-5   ">
      <div className="  space-x-5 mr-30  flex  p-1 pr-7 text-2xl fixed">
        <ul className=" hover:font-bold">
          <Link href="./">Home</Link>
        </ul>
        <ul className="  hover: hover:font-bold">
          <a href="">Find a Mechanic</a>
        </ul>
        <ul className="  hover:font-bold">
          <a href="">Services</a>
        </ul>
        <ul className=" hover:  hover:font-bold">
          <Link href="./about">About us</Link>
        </ul>
        <ul className=" hover: hover:font-bold">
          <a href="">Contact</a>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
