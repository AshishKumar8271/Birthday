import { useSelector } from "react-redux";
import FrontPage from "./page/FrontPage.jsx";
import BackPage from "./page/BackPage.jsx";

const App = () => {
  const { pageValue } = useSelector((state) => state.birthdaySlice);

  return (
    <div>{pageValue ? <BackPage /> : <FrontPage />}</div>
  );
};

export default App;
