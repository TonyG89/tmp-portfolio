import React from 'react'
import Logo from '../components/Logo';
import Contacts from '../components/Contacts';

const Header = () => {
    const Hr = () => <hr className='mx-auto w-3/5 border-dotted border-t-4'/>

    return (
        <header className=" 
        bg-gradient-to-t from-stone-900 to-stone-700 pt-4 ">
            <Hr />
            <div className="flex justify-around items-center py-5">
                <Logo />
                <hgroup className=' text-center'>
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
            </div>
            <Hr />
        </header>
    )
}

export default Header