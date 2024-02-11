import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import "aos/dist/aos.css";

const Details = () => {
  return (
    <section className="bg-[#71bdf0] overflow-x-hidden text-white font-semibold text-center -mt-1">
      {/* Timer */}
      <div>
        <h2>Time to Event</h2>
        <div className="grid grid-cols-4 w-80 border-2 rounded-lg mx-auto mb-3">
          <div className="flex justify-center items-baseline border-r-2 py-2 pr-2">
            <h3 className="text-xl">00</h3>
            <small>hrs</small>
          </div>

          <div className="flex justify-center items-baseline border-r-2 py-2 pr-2">
            <h3 className="text-xl">00</h3>
            <small>hrs</small>
          </div>

          <div className="flex justify-center items-baseline border-r-2 py-2 pr-2">
            <h3 className="text-xl">00</h3>
            <small>hrs</small>
          </div>

          <div className="flex justify-center items-baseline py-2 pr-2">
            <h3 className="text-xl">00</h3>
            <small>hrs</small>
          </div>
        </div>
      </div>

      {/* Event timing and address */}
      <div className="">
        <div
          className="text-center text-white font-semibold"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3>Time for Event: </h3>
          <p>12 Jan 2024 8:00 PM</p>
        </div>
        <div
          className="mt-10 mb-3 text-center text-white font-semibold"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h3>Address:</h3>
          <p className="mb-2">V.P.O ABC, Teh: DEF , Dist: GHI, 233055</p>
          <div className="flex items-center justify-center pb-6 text-white text-sm ">
            <a
              className="btn-grad flex items-center font-semibold"
              href="https://maps.app.goo.gl/1ubnrW58RABN3r1p9"
              target="_blank"
            >
              <FaMapLocation className="mr-1.5 -mt-0.5" />
              Look at Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
