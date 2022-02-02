import React from 'react';

import { FaSave, FaPen } from 'react-icons/fa'


const Options = () => {
  return (
    <div className='flex items-center p-3 border-t border-b border-gray-300'>

      <p className='text-gray-900 text-sm flex-grow font-medium'>Some request</p>

      <button className='button_opt'>

        <FaSave />

        <p>Save</p>

      </button>

      <div className='flex border-r border-gray-300 h-[30px] w-1 mx-2'/>

      <div className='button_opt'>

        <FaPen />

        <p>Edit Mode</p>

      </div>
    </div>
  )
};

export default Options;
