import React from 'react';
import { BiChevronDown } from 'react-icons/bi'

import { items } from '@/utils/mock/makeItems';

const SidebarCollection = () => {
  return (
    <div>

     {items.map(item => <div key={item} className='sidebar_collection'>

      <p className='text-xs text-gray-600 px-3  '>{item}</p>

      <BiChevronDown />

      </div>)}

    </div>
  )
};

export default SidebarCollection;
