import React, { useEffect, useState } from 'react'

import Card from '../components/Card';
import Count from '../components/Count';

import loading from '../assets/img/loading.svg';

function Cards() {
  const [clothes, setClothes] = useState([])
  const [loaded, setLoaded] = useState(false)

  const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=6KNYnrvxGu8-XEznyWiyrmvLMWH5wVz8rszMd6F__C4m8uObruF1n7gTL_v0SkmEwLsuW9kyoa7YEhcW4iUjPLCdONBnzWYIm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCwFmz2LyBL4dHdKZb3GoXSsjaOeh0hHk1eTsTFLkXFYc3Gw6IBq_H-VdHJ6rZ63cNIRhO6Ptb6l1iyJ9Bq2l9YjorF5gBPA_A&lib=MVmebBZpjk358cGI4x7YvWNAONQ2lCa5B'

  const reserveClose = [{
    amount: "20", brand: 0, category: 1, color: "white", link: "hoody-white-blank", name: "hoddie", price: "500", size: "XL", type: 1,
  }, {}, {}]

  console.log(reserveClose);

  useEffect(() => {
    setLoaded(false)
    const fetchClothes = async () => {
      try {
        const response = await fetch(url)
        const clothesData = await response.json()
        setClothes(clothesData.clothes)
      }
      catch(error) {
        console.log("HEY! MAN! ERROR - " + error);
        alert('Вибачаємось,але список не завантажився')
        setClothes(reserveClose)
      } finally {
        setLoaded(true)
      }
    }
    fetchClothes()
  }, [])

  return (
    <section className="bg-gradient-to-l from-slate-600 to-amber-300">
      <div className='mx-[200px] py-10 px-5'>
        <h2 className=''>Наявність речей</h2>
        <ul className='flex flex-1 flex-wrap my-2 justify-between'>
          {loaded ?
            clothes.map(lot => <Card clothes={lot} />) :
            <img src={loading} />}
        </ul>
      </div>
    </section>
  )
}

export default Cards