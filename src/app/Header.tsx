import React from "react";

function Header() {
  return (
    <div className=" ">
      <div
        className=" flex  "
        style={
          {
            // backgroundImage: "url(/img1.jpg)",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            //minHeight: "50vh",
          }
        }
      >
        <div className=" mt-20">
          <div className=" pl-12 text-6xl text-orange-500 font-serif text-left ">
            <h1 className="center  ">Roadside Repair Pros</h1>
          </div>

          <div className="absolute bottom left-40 text-center text-xl text-gray-800 text font-normal mt-10 p-10 whitespace-normal max-w-3xl pl-20 ">
            <p>
              Roadside Repair Pros offers professional and reliable emergency
              assistance for your vehicle. Our expert mechanics are available
              24/7 to provide fast response times and comprehensive repairs
              wherever you are stranded. With a focus on customer satisfaction,
              we offer affordable rates and ensure convenient solutions to get
              you back on the road safely
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
