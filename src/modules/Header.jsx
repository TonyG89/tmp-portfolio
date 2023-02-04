import React from 'react'
import Logo from '../components/Logo';
import Contacts from '../components/Contacts';

const Header = () => {
    return (
        <header className="flex justify-around items-center 
        bg-gradient-to-t from-stone-900 to-stone-700 border-b-2 py-5">
            <Logo />
            <hgroup className='text-center'>
                <h1 className="text-amber-400 text-5xl drop-shadow-lg">
                    Too Much Plant Clothes
                </h1>
                <p className="
                text-amber-400 
                mt-5 py-1
                fs-md 
                rounded-md
                bg-red-700/80 
                hover:bg-red-700/60 ">
                    Речі що є зараз в наявності, та продаються по заниженій ціні!
                </p>
            </hgroup>
            <Contacts />
        </header>
    )
}

export default Header