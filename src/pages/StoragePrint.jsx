import React, { useState } from 'react'
import { url } from '../const';
import axios from 'axios';
import Portfolio from '../modules/Portfolio'

const StoragePrint = ({sectionClass}) => {
  const [storageClothes, setStorageClothes] = useState([]);

  React.useEffect(() => {
    try {
      axios.get(url, res => res.json)
        .then(excel => {
          setStorageClothes(excel.data.portfolio)
        })
    }
    catch (e) {
      console.log("erRor!!! " + e)
      alert('error')
    }
  }, []);


  return (
    <>
    <section className={sectionClass}>

      <h2>Storage Too Much Print</h2>
        <Portfolio clothes={storageClothes} />
    </section>
    </>
  )
}

export default StoragePrint