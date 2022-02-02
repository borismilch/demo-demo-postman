import React from 'react';

import { AppIcon } from '@/components/forms'

import { AiOutlinePlus, BiMenuAltLeft, HiDotsHorizontal } from '@/components/icons'

import { SHeaderTop } from '.'

const SidedbarHeader = () => {
  return (
    <div className='flex flex-col'>

      <SHeaderTop />

      <div className='flex items-center gap-2 px-3'>

        <AppIcon 
          Icon={ <AiOutlinePlus className='text-xl text-gray-600' />}
        />
        
        <div className='flex items-center gap-1 h-[35px] rounded-lg my-2 m-1 border flex-grow border-gray-300'>

          <AppIcon 
            Icon={<BiMenuAltLeft className='text-gray-600 text-lg' />}
          />

          <input type="text" className='clean_input ' placeholder='type something...' />

        </div>

        <AppIcon 
          Icon={<HiDotsHorizontal className='text-lg text-gray-700' />}
        />

      </div>

    </div>
  )
};

export default SidedbarHeader;
