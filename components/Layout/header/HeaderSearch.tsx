import React from 'react';

import { BiSearch } from '@/components/icons'
import { useInputValue } from '@/hooks/.'

const HeaderSearch = () => {

  const [val, bind] = useInputValue()

  return (
    <div className='p-1 px-3 rounded-md bg-gray-200 flex items-center gap-1'>

      <BiSearch className='text-xs text-gray-800' />

      <input {...bind} placeholder='search...' type="text" className='clean_input h-[25px]' />

    </div>
  )
  
};

export default HeaderSearch;
