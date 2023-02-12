import React from 'react'
import Tags from './Tags'

const Card = ({ name, src, desc, tags }) => {
    const link = `/files/portfolio/(${src}).jpg`
    const none = `/files/goods/none.png`

    const containerClass = `
    w-[325px]
    h-full
    border-box border rounded-md border-b
    overflow-hidden 
    shadow-lg 
    bg-cards bg-cover
    px-3 py-1 mx-2 mb-8 gap-4
    text-amber-100
    hover:scale-[1.02]
    transition-all
    `

    return (
        <div className={containerClass}>
            <h2 className="font-bold text-xl mb-2">{name}</h2>
            <img className="rounded-xl bg-zinc-200/20 h-[300px] w-auto mx-auto p-5 border-white" src={link ? link : none} alt={name} />
            <div className="border-spacing-1">
                <em className='text-lg'>Опис:</em>
                <p>{desc}</p>
            </div>
            <ul className="px-6 py-4 border ">
                <li>{desc}</li>
            </ul>
            <Tags tags={tags} id={src} className="px-6 pt-4 pb-2" />
        </div>
    )
}

export default Card