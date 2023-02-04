import React from 'react'
import { brandList } from '../const';

const Card = ({ clothes }) => {
  const { amount, brand, category, color, link, name, price, size, type } = clothes

  const srcImg = (src = 'none') => `/files/goods/${src?src:'none'}.png`

  return (
    <li class="
    min-w-[300px]
    border-box border rounded-md border-b
    overflow-hidden 
    shadow-lg 
    bg-cards bg-cover
    px-3 py-1 mx-2 my-4 
    text-amber-300
    ">
      <h2 class="font-bold text-xl mb-2">{name}</h2>
      <img class="rounded-xl bg-zinc-200/20 h-[300px] w-auto mx-auto p-5 border-white" src={srcImg(link)} alt={link} />
      <div class="border-spacing-1">
        <em className='text-lg'>Опис:</em>
        <p>{brand} {size} {color} {type}</p>
      </div>
      <ul class="px-6 py-4 border ">
        <li><h3><b>Бренд: </b>{brandList[brand]}</h3></li>
        <li><b>Розмір: </b>{size}</li>
        <li><b>Тип: </b>{type}</li>
        <li><b>Колір: </b>{color}</li>
        <li><b>Категорія: </b>{category}</li>
        <li><b>Наявність: </b>{amount}</li>
        <li><b>Ціна: </b>{price ? <span>{price} грн</span> : <i>уточнюйте</i>}</li>
      </ul>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </li>
  )
}

export default Card