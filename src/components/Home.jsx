import { motion } from "framer-motion";

// import lydia from "../public/img/lydia.png";
import lydia2 from "../assets/img/lydia2.png";
// import favicon from "../public/img/favicon.png";
import hat from "../assets/img/hat.svg";
import ballon1 from "../assets/img/ballon3.svg";
import ballon2 from "../assets/img/ballon2.svg";
import ballon3 from "../assets/img/ballon3.svg";

const Home = () => {
  return (
    <div className="box">
      <div className="six">
        <motion.img
          animate={{ rotateZ: 360 }}
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
        <div className="six w-full">
        <motion.img
          animate={{ rotateZ: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={lydia2}
          alt=""
          className="lydia-dp h-40"
          data-node-name="imagePath"
        />
        <motion.img
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          src={hat}
          alt=""
          className="hat h-40"
        />
        <div className="wish">
          <h3 className="wish-hbd" data-node-name="wishHeading"></h3>
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"
          <div/>
          <motion.img
            initial={{ y: 650 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"
          />
          <motion.img
            initial={{ y: 670 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"
          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{ y: -700 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"
          />
        </div>
      </div>
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
