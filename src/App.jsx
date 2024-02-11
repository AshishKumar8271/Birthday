import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FrontPage from "./page/FrontPage.jsx";
import BackPage from "./page/BackPage.jsx";
import Aos from "aos";

const App = () => {
  const { pageValue } = useSelector((state) => state.birthdaySlice);


  useEffect(() => {
    Aos.init();
  }, []);

  return(
    <div className="min-h-screen overflow-x-hidden">
      { pageValue ? <BackPage />: <FrontPage />}
    </div>
  )
};

export default App;
