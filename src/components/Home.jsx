import { motion } from "framer-motion";

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

      <div className="seven">
        <div className="baloons">
          <motion.img
            initial={{ y: 550 }}
            animate={{
              y: [550, 530, 550],
              transition: { duration: 3, repeat: Infinity },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"
          />
          <motion.img
            initial={{ y: 650 }}
            animate={{
              y: [60, 40, 60],
              transition: { duration: 3, repeat: Infinity },
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon1}
            alt=""
            className="h-40"
          />
          <motion.img
            initial={{ y: 670 }}
            animate={{
              y: [550, 530, 550],
              transition: { duration: 3, repeat: Infinity },
            }}
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
            animate={{
              y: [50, 30, 50],
              transition: { duration: 3, repeat: Infinity },
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{
              y: [80, 60, 80],
              transition: { duration: 3, repeat: Infinity },
            }}
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
            animate={{
              y: [550, 530, 550],
              transition: { duration: 3, repeat: Infinity },
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={ballon2}
            alt=""
            className="h-40"

          />
          <motion.img
            initial={{ y: 700 }}
            animate={{
              y: [750, 730, 750],
              transition: { duration: 3, repeat: Infinity },
            }}
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
            animate={{
              y: [-20, -10, -20],
              transition: { duration: 3, repeat: Infinity },
            }}
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
            animate={{
              y: [50, 30, 50],
              transition: { duration: 3, repeat: Infinity },
            }}
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
            animate={{
              y: [50, 30, 50],
              transition: { duration: 3, repeat: Infinity },
            }}
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
            animate={{
              y: [50, 30, 50],
              transition: { duration: 3, repeat: Infinity },
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ballon3}
            alt=""
            className="h-40"

          />
        </div>
      </div>
    </div>
  );
};

export default Home;
