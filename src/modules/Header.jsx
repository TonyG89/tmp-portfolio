import React from 'react'
import Logo from '../components/Logo';
import Contacts from '../components/Contacts';

const Header = () => {
    const Hr = () => <hr className='mx-auto 
    md:w-3/5 
    border-dotted border-t-4'/>

    return (
        <header className=" 
        bg-gradient-to-t from-stone-900 to-stone-700 pt-4 px-4">
            <Hr />
            <div className="
            flex-col flex justify-around items-center py-5
            md:flex-row">
                <Logo />
                <hgroup className=' text-center mb-8'>
                    <h1 className="text-amber-50 
                    font-title 
                    text-transparent bg-clip-text bg-gradient-to-b from-stone-400 to-amber-300
                    drop-shadow-lg">
                        Too Much Plant Clothes
                    </h1>
                    <p className="
                text-amber-400 
                mt-5 py-1 mx-4 
                rounded-md
                md:text-md
                text-base
                bg-red-700/80 
                hover:bg-red-900 hover:text-amber-200">
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