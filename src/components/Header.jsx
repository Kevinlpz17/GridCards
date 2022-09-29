import React from 'react';
import Face6Icon from '@mui/icons-material/Face6';

const Header = () => {
  return (
    <div className='grid grid-cols-2 w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-500 '>
      <h1 className='font-bold text-2xl flex items-center px-8 text-white'>Tarea 1</h1>
      <div className=' flex justify-end items-center'>
        <span className=' mx-3 font-bold text-2xl w-30 h-auto flex text-white justify-center items-center'>Kevin L</span>
        <Face6Icon className='text-white mx-3' style={{fontSize: 50}}/>
      </div>
    </div>
  )
}

export default Header;
