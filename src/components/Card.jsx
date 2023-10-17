import React from 'react'

const Card = ({ img, h1, p, logo }) => {
  return (
    <div className='p-5 px-9 pt-5 text-center shadow-xl rounded-lg'>
        <img className='ml-8 mb-4 mt-6' src={img} alt="logo" />
        <h1 className="font-semibold mb-3 text-xl">{h1}</h1>
        <p className="text-gray-400 mb-6">{p}</p>
        <logo>{logo}</logo>
        <button className="p-3 bg-blue-600 text-white text-sm shadow-md rounded-sm">Add & Install Extension</button>
    </div>
  )
}

export default Card