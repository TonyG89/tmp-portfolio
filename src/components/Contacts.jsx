import React from 'react'
import { objContacts } from '../const';
import phone from '../assets/img/icons/phone.svg';
import instagram from '../assets/img/icons/instagram.svg';
import email from '../assets/img/icons/email.svg';
import telegramMono from '../assets/img/icons/telegram-mono.svg';

const Contacts = (props) => {
    const {width = "220px", style = ''} = props
    const img = [instagram, phone, telegramMono,email]

    const block = (contacts, index) => (
        <a key={index} href={contacts.href} 
        className={`
        flex 
        ${style} ${width === "200px" && "hover:font-semibold"
        }`}>
            <img className="
            md:h-6 self-center
            h-4  
            " src={img[index]} alt={contacts.img} />
            <h4 className="px-2 xl:text-xl text-sm">{contacts.name}</h4>
        </a>)

    return (
        <address className={`contacts 
        xl:w-[${width}] xl:block xl:p-3 xl:${style} 
        md:hidden
        flex justify-around flex-wrap  px-2 border-l-2 border-stone-900
     bg-stone-0 ring-stone-900`}>
            {objContacts.map((i, index) => block(i, index))}
        </address>
    )
}

export default Contacts