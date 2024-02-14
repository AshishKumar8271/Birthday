import { motion } from "framer-motion";

import lydia2 from "../assets/img/lydia2.png";

import Balloon from "./Balloon";

const Home = () => {
  return (
    <div className="box">
      <div className="six flex items-center justify-center flex-col">
        <div className="hero-img"></div>
        <div className="wish">
          <h3 className="wish-hbd text-blue-800" data-node-name="wishHeading">
            Happy Birthday!
          </h3>
          <h5 data-node-name="wishText text-blue-600">
            Come join the fun and make it a celebration to remember! ;)
          </h5>
        </div>
      </div>

      <div className="min-h-screen">
        <Balloon />
      </div>
    </div>
  );
};

export default Home;
