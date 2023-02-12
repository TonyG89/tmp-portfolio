import React from 'react'
import Card from '../components/Card'
import Error from '../components/Error'

const Portfolio = ({ clothes }) => {

    console.log(clothes)
    return (
        <ul className='flex flex-wrap justify-between'>
            {clothes.map(obj =>
            (<li className='h-[600px]' key={obj["id-portfolio"]}>
                <Card name={obj.name} src={obj["id-portfolio"]} desc={obj.description} tags={obj.tags} />
            </li>))}
            <Error />
        </ul>
    )
}

export default Portfolio