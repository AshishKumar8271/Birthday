import { useDispatch } from 'react-redux';
import { openPage } from '../Features/userSlice.jsx';

const FrontPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[bisque] min-h-screen p-5 pt-12 flex flex-col items-center justify-center">
      <img src="/img/laddi.png" className='' alt="" />
      <div>
        <p className='text-center mt-5 font-semibold text-pink-700'>Birthday party Invitation by</p>
        <h1 className='text-[60px] text-center font-bold text-pink-700 uppercase animate-wiggle'>Gaurav</h1>
      </div>
      <div className='h-40 w-full flex justify-center -mt-6'>
        <img src="/img/cake.gif" alt="" className='h-full'/>
      </div>
      <div className='text-center'>
        <button className='text-white bg-black py-2 px-6 rounded-md hover:bg-slate-900 transition-all duration-200' onClick={()=>dispatch(openPage())}>Open Invitation</button>
      </div>
    </div>
  )
}

export default FrontPage;
