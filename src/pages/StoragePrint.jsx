import React from 'react'
import { url } from '../const';

const StoragePrint = () => {


  React.useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return () => {
          cleanup
        };
      }

        , []);

  }).catch(e => {
    console.log("erRor!!! " + e)
    alert('error')
  })


  return (
    <>
      <h2>Storage Too Much Print</h2>
      <div className="container">
        <p>{ }</p>
      </div>
    </>
  )
}

export default StoragePrint