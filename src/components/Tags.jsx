import React from 'react'

const Tags = ({ tags,id }) => {
    const tagsArr = tags.split(', ') 

    return (
        <ul>
            {tagsArr.map((tag, index) => <span key={id[index]} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>)}
        </ul>
    )
}

export default Tags