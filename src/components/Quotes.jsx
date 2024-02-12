import React from 'react';
import ballonsvg from "../assets/img/balloonstyle.svg"

const Quotes = () => {
  return (
    <article className='p-4 mt-6'>
      <div className='mb-8 text-green-600 font-bold font-courg text-lg text-left md:text-xl' data-aos="fade-right" data-aos-duration="1500">
        <p className='w-11/12 md:w-3/5 relative'>"Count your age by friends, not years. Count your life by smiles, not tears." — John Lennon
        <img src={ballonsvg} alt="" className='w-24 absolute -right-24 -top-2 -z-[1] animate-wiggi'/>
        </p>
      </div>

      <div className='mb-8 text-green-600 font-bold font-courg text-lg flex justify-end md:text-xl' data-aos="fade-left" data-aos-duration="1500">
        <p className='w-11/12 md:w-3/5 text-right relative'>"As you get older, three things happen: The first is your memory goes, and I can't remember the other two." — Norman Wisdom
        <img src={ballonsvg} alt="" className='w-24 absolute -left-16 -top-1 -z-[1] animate-wiggi'/>
        </p>
      </div>
    </article>
  )
}

export default Quotes
