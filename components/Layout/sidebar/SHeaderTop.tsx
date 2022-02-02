import React from 'react';
import { FaUser } from 'react-icons/fa';


const SHeaderTop = () => {
  return (
    <div className='flex items-center justify-between p-2 px-4 border-b border-gray-300'>

    <div className='flex items-center gap-2'>
      <FaUser className='text-xl text-gray-800' />

      <p className='text-sm font-semibold text-gray-800'>New workspace</p>
    </div>

    <div className='flex items-center gap-2'>

      <button className='small_button'>Next</button>

      <button className='small_button'>import</button>

    </div>

  </div>
  )
};

export default SHeaderTop;
