import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FrontPage from "./page/FrontPage.jsx";
import BackPage from "./page/BackPage.jsx";
import Aos from "aos";

const App = () => {
  const { pageValue } = useSelector((state) => state.birthdaySlice);
  const [isloading,setLoading] = useState(true);


  useEffect(() => {
    Aos.init();
  }, []);

  return(
    <div>
      {
        isloading && 
        <div className="fixed bg-white top-0 left-0 w-full h-full z-10 grid place-items-center">
        <h1>Loading...</h1>
      </div>
      } 
      <div className="min-h-screen overflow-x-hidden" onLoad={() => setLoading(false)}>
      { pageValue ? <BackPage />: <FrontPage />}
    </div>
    </div>
  )
};

export default App;
