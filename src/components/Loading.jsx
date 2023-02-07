import React from 'react'
import { FallingLines } from  'react-loader-spinner'

const Loading = () => {
    return (
        <div className='text-center mx-auto w-[200px]'>
            <FallingLines
                color="white"
                width="200px"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    )
}

export default Loading