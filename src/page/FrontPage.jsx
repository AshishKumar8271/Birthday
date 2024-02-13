import { useDispatch } from 'react-redux';
import { openPage } from '../Features/userSlice.jsx';
import laddi from "../assets/img/laddi.png";
import cake from "../assets/img/cake.gif";

const FrontPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <img src={laddi} className='' alt="" />
      <div>
        <p className='text-center mt-5 font-semibold text-pink-700'>Birthday party Invitation by</p>
        <h1 className='text-[60px] text-center font-bold text-pink-700 uppercase animate-wiggle'>Gaurav</h1>
      </div>
      <div className='h-40 w-full flex justify-center -mt-6'>
        <img src={cake} alt="" className='h-full'/>
      </div>
      <div className='text-center'>
        <button className='text-white bg-black py-2 px-6 rounded-md hover:bg-slate-900 transition-all duration-200' onClick={()=>dispatch(openPage())}>Open Invitation</button>
      </div>
    </div>
  )
}

export default FrontPage;
