import React from 'react'
import Contacts from './../components/Contacts';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <Contacts width="auto" style="flex"/>
      <div className='flex justify-center bg-slate-800 text-amber-200 hover:text-amber-400 py-2'><small>Copyright © 2016 - {year}. <a href="#" className='hover:text-amber-600'>TooMuchPrint®</a>. All rights reserved.</small></div>
    </>
  )
}

export default Footer