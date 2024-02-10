import React from 'react';
import {useSelector } from 'react-redux';

const BackPage = () => {
  const {pageValue} = useSelector((state)=> state.birthdaySlice);
  console.log(pageValue);
  return (
    <div className={`${!pageValue && "hidden"}`}>
      BackPage
    </div>
  )
}

export default BackPage;
