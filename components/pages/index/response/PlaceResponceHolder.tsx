import React from 'react';
import { PortmanIcon } from '@/components/icons'

const PlaceResponceHolder = () => {
  return  (
    <div className='flex flex-col p-2 pt-5 border-t border-gray-300'>

      <div className='flex items-center flex-col justify-center gap-2 felx-grow'>
        <PortmanIcon />

        <p className='text-gray-700 font-medium'>Enter the URL and click Send to get a response </p>  
      </div>

    </div>
  )
};

export default PlaceResponceHolder;
