import React, { useEffect, useState } from "react";
import { FaMapLocation } from "react-icons/fa6";
import "aos/dist/aos.css";

const Details = () => {
  const birthdayDate = new Date("2024-02-13");
  const currentDate = new Date();

  const calculateTimeLeft = () => {
    const difference = birthdayDate - currentDate;
    let timeLeft = {};

    if (difference > 0) {
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      if (days < 10) {
        days = `0${days}`;
      }

      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      if (hours < 10) {
        hours = `0${hours}`;
      }

      let minutes = Math.floor((difference / 1000 / 60) % 60);
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let seconds = Math.floor((difference / 1000) % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      timeLeft = {
        days,
        hours,
        minutes,
        seconds,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="bg-[#71bdf0] text-white font-semibold text-center -mt-1 overflow-x-hidden font-ubuntu">
      {/* Timer */}
      <div>
        <h2>Time to Event</h2>
        <div className="grid grid-cols-4 w-80 border-2 rounded-lg mx-auto mb-3">
          <div className="flex justify-center items-baseline border-r-2 py-2 pr-2">
            <h3 className="text-xl mr-0.5">{timeLeft.days}</h3>
            <small>days</small>
          </div>

          <div className="flex justify-center items-baseline border-r-2 py-2 pr-2">
            <h3 className="text-xl mr-0.5">{timeLeft.hours}</h3>
            <small>hrs</small>
          </div>

          <div className="flex justify-center items-baseline border-r-2 py-2 pr-2">
            <h3 className="text-xl mr-0.5">{timeLeft.minutes}</h3>
            <small>min</small>
          </div>

          <div className="flex justify-center items-baseline py-2 pr-2">
            <h3 className="text-xl mr-0.5">{timeLeft.seconds}</h3>
            <small>sec</small>
          </div>
        </div>
      </div>

      {/* Event timing and address */}
      <div className="">
        <div
          className="text-center text-white font-semibold overflow-x-hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3>Time for Event: </h3>
          <p>13 Feb 2024 8:00 PM</p>
        </div>
        <div
          className="mt-10 mb-3 text-center text-white font-semibold overflow-x-hidden"
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
