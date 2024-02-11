import React from 'react'

const Quotes = () => {
  return (
    <article className='p-4'>
        <div className='mb-8 text-green-600 font-bold font-courg text-2xl text-left'>
        <p className='w-11/12'>"Count your age by friends, not years. Count your life by smiles, not tears." — John Lennon</p>
        </div>

        <div className='mb-8 text-green-600 font-bold font-courg text-2xl flex justify-end'>
        <p className='w-11/12 text-right'>"Count your age by friends, not years. Count your life by smiles, not tears." — John Lennon</p>
        </div>
    </article>
  )
}

export default Quotes
