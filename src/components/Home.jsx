import { motion } from "framer-motion";

// import lydia from "../public/img/lydia.png";
import lydia2 from "../assets/img/lydia2.png";
// import favicon from "../public/img/favicon.png";
import hat from "../assets/img/hat.svg";

import Balloo from "./Balloon";

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
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotateZ: 360 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          src={hat}
          alt=""
          className="hat h-40"
        />
        <div className="wish">
          <h3 className="wish-hbd" data-node-name="wishHeading">
            Happy Birthday!
          </h3>
          <h5 data-node-name="wishText">
            May the js.prototypes always be with you! ;)
          </h5>
        </div>
      </div>

      <div className="min-h-screen">
        <Balloo />
      </div>
    </div>
  );
};

export default Home;