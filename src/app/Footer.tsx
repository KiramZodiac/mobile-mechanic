import { url } from "inspector";
import React from "react";

interface servicep {
  title: string;
  descr: string;
  img: any;
}

function Footer() {
  return (
    <div className=" bg-gray-700" style={{ backgroundImage: "url('bg.jpeg')" }}>
      <h1 className=" text-center text-5xl pb-6 text-white text-opacity-96">
        Our Services
      </h1>
      <div className=" flex justify-center gap-9">
        <ServiceProps
          title={"Brake Repair and Replacement"}
          descr="
        Your brakes are one of the most critical safety components of your vehicle. 
        Trust our expert technicians to inspect, repair, or replace
         your brakes to ensure optimal performance and stopping power.
        "
          img="brake.jpeg"
        />
        <ServiceProps
          title={"Shock Absorber Replacement"}
          descr="
        Worn-out shock absorbers can lead to a bumpy and uncomfortable ride.
         Let us replace your shock absorbers with high-quality replacements to improve your vehicle's stability and ride comfort.
        "
          img="shock.jpeg"
        />
        <ServiceProps
          title={"Wheel Alignment"}
          descr="
        Proper wheel alignment is essential for maintaining even tire wear and optimal handling.
         Our precision wheel alignment services will ensure your vehicle tracks straight and handles smoothly on the road.
        "
          img="alignmt.jpeg"
        />
        <ServiceProps
          title={"Suspension Repair"}
          descr="
        Whether you're experiencing a bouncy ride or unusual noises over bumps,
         our suspension repair services can diagnose and fix issues to restore your vehicle's stability and ride quality.
        "
          img="suspension.jpeg"
        />
      </div>
    </div>
  );
}

const ServiceProps = ({ title, descr, img }: servicep) => {
  return (
    <div>
      <div className=" pl-5   " style={{ width: 300 }}>
        <div
          className="card text-white mb-3 text-center bg-slate-500 h-full "
          style={{ width: "18rem" }}
        >
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
            style={{ width: 300, height: 300 }}
          />
          <div className="card-body" style={{ height: 200 }}>
            <h5 className="card-title  text-2xl font-serif text-orange-500">
              {title}
            </h5>
            <p className="card-text font-normal">{descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
