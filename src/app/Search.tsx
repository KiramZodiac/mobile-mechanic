import React from "react";

function Search() {
  const handleClick = (e: any) => {};
  return (
    <div className="">
      <div className="border-solid border-y-emerald-50  pb-20 mt-60 flex place-content-center space-x-3    ">
        <input
          className="  bg-cyan-600  pb-5 border-solid border- w-2/4 border-r-2  rounded-lg text-lg  "
          placeholder="search"
          type="text"
          style={{ fontSize: 20 }}
        />
      </div>
      <div className=" text-center w-32  size-14 pr-3 place-content-center pl-96 pb-20  ">
        <button className=" w-44 h-14 rounded-lg justify-center items-center  hover:bg-blue-500 text-white text-xl      bg-sky-700 ">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
