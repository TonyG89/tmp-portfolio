import React from 'react'
import { objContacts } from '../const';
import phone from '../assets/img/icons/phone.svg';
import instagram from '../assets/img/icons/instagram.svg';
import email from '../assets/img/icons/email.svg';
import telegramMono from '../assets/img/icons/telegram-mono.svg';

const Contacts = () => {
    const img = [email, phone, telegramMono, instagram]
    const blockHeader = (contacts, index) => (<div key={index}><a href={contacts.href} className="flex justify-end hover:font-semibold">
        <div className="text-2xl px-2 ">{contacts.name}</div>
        <img className="w-10" src={img[index]} alt={contacts.img} />
    </a></div>)

    return (
        <div className="contacts flex-column justify-center w-[320px] rounded-md ring-2
    p-3 bg-amber-100 ring-amber-400">
            {objContacts.map((i, index) => blockHeader(i, index))}
        </div>
    )
}

export default Contacts