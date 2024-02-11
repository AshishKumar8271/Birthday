import { motion } from "framer-motion";

import lydia2 from "../assets/img/lydia2.png";

import Balloon from "./Balloon";

const Home = () => {
  return (
    <div className="box relative">
      <div className="six">
        <motion.img
          animate={{ rotateZ: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={lydia2}
          alt=""
          className="lydia-dp h-40"
          data-node-name="imagePath"
        />
        <div className="wish">
          <h3 className="wish-hbd" data-node-name="wishHeading">
            Happy Birthday!
          </h3>
          <h5 data-node-name="wishText">
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
