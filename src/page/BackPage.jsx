import Home from "../components/Home";
import Details from "../components/Details.jsx";
import WishingBox from "../components/WishingBox";
import Footer from "../components/Footer.jsx";
import Quotes from "../components/Quotes";
import ImageSlider from "../components/ImageSlider.jsx";

const BackPage = () => {
  return (
    <div>
      <Home />

      <Quotes />

      {/* wave top */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=""
      >
        <path
          fill="#71bdf0"
          fillOpacity="1"
          d="M0,192L40,202.7C80,213,160,235,240,213.3C320,192,400,128,480,101.3C560,75,640,85,720,117.3C800,149,880,203,960,197.3C1040,192,1120,128,1200,106.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      {/* Event Timing and Details */}
      <Details />

      {/* wave down */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mt-1"
      >
        <path
          fill="#71bdf0"
          fillOpacity="1"
          d="M0,192L40,202.7C80,213,160,235,240,213.3C320,192,400,128,480,101.3C560,75,640,85,720,117.3C800,149,880,203,960,197.3C1040,192,1120,128,1200,106.7C1280,85,1360,107,1400,117.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <ImageSlider />

      <div className="mt-28 flex items-center justify-center">
        <WishingBox />
      </div>

      {/* wave top */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=""
      >
        <path
          fill="#71bdf0"
          fillOpacity="1"
          d="M0,192L40,202.7C80,213,160,235,240,213.3C320,192,400,128,480,101.3C560,75,640,85,720,117.3C800,149,880,203,960,197.3C1040,192,1120,128,1200,106.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <Footer />
    </div>
  );
};

export default BackPage;
