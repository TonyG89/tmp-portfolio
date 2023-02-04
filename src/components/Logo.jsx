import React from 'react'
import logo from '../assets/img/logo.png';

const Logo = () => {
    return (
        <><a href="#" className="w-40 h-40 p-8 bg-amber-100 text-center rounded-full
    ring-2 ring-amber-400 ">
        <img src={logo}
        className="scale-150 pb-5 hover:animate-spin " alt="logo" /></a>
        </>
    )
}

export default Logo