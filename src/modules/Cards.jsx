import React, { useEffect, useState } from 'react'

import Card from '../components/Card';
import Count from '../components/Count';
import Filter from '../components/Filter';
// import Pagination from '../components/Pagination'

import {url} from '../const'

import loading from '../assets/img/loading.svg';

function Cards() {
  const [clothes, setClothes] = useState([])
  const [clothesOnPage, setClothesOnPage] = useState(clothes)
  const [loaded, setLoaded] = useState(false)
  const [count, setCount] = useState(0)
  const [currentList, setCurrentList] = useState(0)
  const [fetching, setFetching] = useState(true)

  const reserveClose = [{
    amount: "20", brand: 0, category: 1, color: "white", link: "hoody-white-blank", name: "hoddie", price: "500", size: "XL", type: 1,
  }, {}, {}]
  useEffect(() => {
    setLoaded(false)
    const fetchClothes = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setClothes(data.clothes)
        setClothesOnPage(data.clothes.slice(0,10))
        setCount(data.clothes.length)
      }
      catch (error) {
        console.log("HEY! MAN! ERROR - " + error);
        // alert('Вибачаємось, але список не завантажився')
        setClothes(reserveClose)
      } finally {
        setLoaded(true)
      }
    }
    fetchClothes()
  }, [])

  // SCROLL

  useEffect(() => {
    if (fetching) {
      console.log("fetching")
      setClothesOnPage([...clothesOnPage, ...clothes.slice(currentList, currentList + 10)])
      setCurrentList(prev => prev + 10)
      setFetching(false)
    }
  }, [fetching, clothes])
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
    document.removeEventListener('scroll', scrollHandler)
    }
  })
  
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && clothesOnPage.length <=  clothes.length) {
      setFetching(true)
    }
  }

  // STYLES
  const divClass = "xl:w-4/5 mx-auto py-10 px-5 sm:text-center"
  const ulClass = "flex flex-1 flex-wrap my-2 justify-between"

  return (
    <section className="">
      <div className={divClass}>
        <h2 className='text-white'>Наявність речей ({count})</h2>
        <Filter clothes={clothes}/>
        <ul className={ulClass}>
          {loaded ?
            clothesOnPage.map(lot => <Card clothes={lot} />) :
            <img src={loading} />}
        </ul>
      </div>
    </section>
  )
}

export default Cards