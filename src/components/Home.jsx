import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";

// import lydia from "../public/img/lydia.png";
import lydia2 from "../public/img/lydia2.png";
// import favicon from "../public/img/favicon.png";
import hat from "../public/img/hat.svg";
import ballon1 from "../public/img/ballon3.svg";
import ballon2 from "../public/img/ballon2.svg";
import ballon3 from "../public/img/ballon3.svg";

const Home = () => {
  return (
    <div className="box">
      <div className="six">
        <motion.img
          animate={{ rotateZ: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          src={lydia2}
          alt=""
          className="lydia-dp"
          data-node-name="imagePath"
        />
        <img src={hat} alt="" className="hat" />
        <div className="wish">
          <h3 className="wish-hbd" data-node-name="wishHeading">
            Happy Birthday!
          </h3>
          <h5 data-node-name="wishText">
            May the js.prototypes always be with you! ;)
          </h5>
        </div>
      </div>

      <div className="seven">
        <div className="baloons">
          <motion.img
            initial={{ y: 250 }}
            animate={{ y: -10 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
          />
          <img src={ballon1} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon3} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon2} alt="" />
          <img src={ballon1} alt="" />
          <img src={ballon3} alt="" />
        </div>
      </div>

      <div className="eight">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
