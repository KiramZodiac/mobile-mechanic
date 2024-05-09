import React from "react";
import NavBar from "../NavBar";
import Link from "next/link";

function about() {
  return (
    <div>
      <div className=" bg-sky-950 fixed w-full h-16 pb-10">
        <NavBar />
      </div>
      <div className=" text-red-600 pt-10 text-lg">
        <h1>ABOUT US</h1>
      </div>
    </div>
  );
}

export default about;
