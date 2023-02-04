import React from 'react'
import logo from '../assets/img/logo.png';

const Logo = () => {
    return (
        <><a href="#" className="w-60 h-60 p-8 bg-amber-100 text-center rounded-full
    ring-2 ring-amber-400 font-bold ">
        <img src={logo}
        className="hover:animate-spin " alt="logo" /></a>
        </>
    )
}

export default Logo