import React from 'react'
import Button from './Button';

const ButtonList = (arr) => {
    return (
        <>
            <div className='flex items-center'><h2>одяг:</h2>
                <ul className='flex'>
                    {arr.map((item, index) =>(
                        <li key={index} className="px-1">
                        <Button style={"text-red-500"}>{item}</Button>
                        </li>)
                    )}
                </ul>
            </div>
        </>
    )
}

export default ButtonList