import ballonsvg from "../assets/img/balloonstyle.svg";
import birthdayBoy from "../assets/img/birthday-boy.svg";

import Balloon from "./Balloon";

const Home = () => {
  return (
    <div className="box">
      <div className="six flex items-center justify-center flex-col">
        <div className="hero-img"></div>
        <div className="wish relative mt-8">
          <span
            className="text-blue-800 text-3xl lg:text-5xl -mr-6"
            data-node-name="wishHeading"
          >
            Happ
          </span>

          <div className="absolute top-0 left-[32%] md:left-[39%] lg:top-0 lg:left-[37%] transform rotate-180">
            <img src={birthdayBoy} className="w-12 lg:w-16 animate-wiggi" />
          </div>

          <span
            className="text-blue-800 text-3xl lg:text-5xl ml-20 md:ml-16 lg:ml-20"
            data-node-name="wishHeading"
          >
            Birthday!
          </span>
          <div className="absolute top-36 left-[50%] lg:top-0 lg:left-44 block lg:hidden">
            <img src={ballonsvg} className="w-12 animate-wiggi" />
          </div>
          <div className="absolute top-36 left-[20%] lg:top-0 lg:left-44 block lg:hidden">
            <img src={ballonsvg} className="w-12 animate-wiggi" />
          </div>
          <div className="absolute top-36 right-[50%] lg:top-0 lg:right-44 block lg:hidden">
            <img src={ballonsvg} className="w-12 animate-wiggi" />
          </div>
          <div className="absolute top-36 right-[20%] lg:top-0 lg:right-44 block lg:hidden">
            <img src={ballonsvg} className="w-12 animate-wiggi" />
          </div>
          <div className="mt-4 text-lg lg:text-2xl text-blue-600">
            Come join the fun and make it a celebration to remember! ;)
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <Balloon />
      </div>
    </div>
  );
};

export default Home;
