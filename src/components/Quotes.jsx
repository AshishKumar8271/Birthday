import React from 'react'

const Quotes = () => {
  return (
    <article className='p-4 mt-6'>
      <div className='mb-8 text-green-600 font-bold font-courg text-xl text-left' data-aos="fade-right" data-aos-duration="1500">
        <p className='w-11/12 md:w-3/5'>"Count your age by friends, not years. Count your life by smiles, not tears." — John Lennon</p>
      </div>

      <div className='mb-8 text-green-600 font-bold font-courg text-xl flex justify-end' data-aos="fade-left" data-aos-duration="1500">
        <p className='w-11/12 md:w-3/5 text-right'>"As you get older, three things happen: The first is your memory goes, and I can't remember the other two." — Norman Wisdom</p>
      </div>
    </article>
  )
}

export default Quotes
