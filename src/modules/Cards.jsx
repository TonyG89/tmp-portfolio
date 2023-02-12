import React, { useEffect, useState } from 'react'

import CardGoods from '../components/CardGoods';
import Count from '../components/Count';
import Filter from '../components/Filter';
import Loading from '../components/Loading';

// import Pagination from '../components/Pagination'

import { url } from '../const'


function Cards({setCount}) {
  const [clothes, setClothes] = useState([])
  const [clothesOnPage, setClothesOnPage] = useState(clothes)
  const [loaded, setLoaded] = useState(false)
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
        console.log(data)
        setClothes(data.goods)
        setClothesOnPage(data.goods.slice(0, 10))
        setCount(data.goods.length)
      }
      catch (error) {
        console.log("HEY! MAN! ERROR - " + error);
        // alert('Вибачаємось, але список не завантажився! Повідомте, будь ласка, про дану проблему нам')
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
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && clothesOnPage.length <= clothes.length) {
      setFetching(true)
    }
  }
  
  // STYLES
  const ulClass = "flex flex-1 flex-wrap my-2 justify-between"

  return (
    <>
      <Filter clothes={clothes} />
      <ul className={ulClass}>
        {loaded ?
          clothesOnPage.map(lot => <CardGoods clothes={lot} key={lot["id-items"]}/>) :
          <Loading />}
      </ul>
    </>
  )
}

export default Cards