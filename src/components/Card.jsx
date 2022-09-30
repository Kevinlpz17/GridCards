import React from 'react';

const Card = ({title = '', description = '', imagen = '', price = ''}) => {
  return (
    <div className='flex flex-col border-solid border-2 bg-gray-200 shadow-lg hover:shadow-slate-400 duration-300 transition ease-in-out delay-150  hover:-translate-y-1  rounded-3xl w-72 h-auto mt-28'>
      <img src={imagen} className=" w-52 h-auto rounded-full relative bottom-16 left-10"  />
      <h1 className='text-2xl font-extrabold relative px-3 bottom-11'>{title}</h1>
      <span className='px-3 relative bottom-9'>{description}</span>
      <div className='grid grid-cols-2 gap-2 w-full h-10 justify-center items-center rounded-b-3xl bg-gray-300'>
        <div className='px-3 font-extrabold'>Por tan solo: </div>
        <div className='text-center bg-red-700 rounded-xl w-16 h-7 relative left-14 text-white font-bold'>{price}</div>
      </div>
    </div>
  )
}

export default Card