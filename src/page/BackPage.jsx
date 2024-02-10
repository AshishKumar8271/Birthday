import {useSelector } from 'react-redux';
import Home from '../components/Home';

const BackPage = () => {
  const {pageValue} = useSelector((state)=> state.birthdaySlice);
  console.log(pageValue);
  return (
    <div className={`${!pageValue && "hidden"}`}>
      <Home />
    </div>
  )
}

export default BackPage;
