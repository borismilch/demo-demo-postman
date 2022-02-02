import React from 'react';
import { AiOutlineSetting, AiOutlineBell, FaUserAstronaut } from '@/components/icons'

import { AppIcon } from '@/components/.'

const HeaderRightSection = () => {
  return (
    <div className='flex items-center gap-1'>
      <AppIcon 
        Icon={<AiOutlineSetting className='text-xl text-gray-700' />}
      />

      <AppIcon 
        Icon={<AiOutlineBell className='text-xl text-gray-700' />}
      />

      <AppIcon 
        Icon={<FaUserAstronaut className='text-xl text-gray-700' />}
      />

      <div>
        <button className='button_row'>Upadate</button>
      </div>

    </div>
  )
};

export default HeaderRightSection;
