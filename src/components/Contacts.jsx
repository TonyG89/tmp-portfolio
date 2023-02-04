import React from 'react'
import { objContacts } from '../const';
import phone from '../assets/img/icons/phone.svg';
import instagram from '../assets/img/icons/instagram.svg';
import email from '../assets/img/icons/email.svg';
import telegramMono from '../assets/img/icons/telegram-mono.svg';

const Contacts = (props) => {
    const {width = "250px", flexible = ''} = props
    const img = [instagram, phone, telegramMono,email]
    const blockHeader = (contacts, index) => (
        <a key={index} href={contacts.href} className={`flex justify-start ${width === "250px" && "hover:font-semibold"}`}>
            <img className="h-6 self-center" src={img[index]} alt={contacts.img} />
            <h4 className="px-2">{contacts.name}</h4>
        </a>)

    return (
        <div className={`contacts w-[${width}] ${width !== "250px" && 'flex justify-around' } rounded-md ring-2
    p-3 bg-amber-100 ring-amber-400`}>
            {objContacts.map((i, index) => blockHeader(i, index))}
        </div>
    )
}

export default Contacts