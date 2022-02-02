import React from 'react';

import { WindowItem } from '.';
import { windows as mockWindows } from '@/utils/mock/windows'

import { AppIcon } from '@/components/forms'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { windowStore  } from '@/store/reducers'

import { uuid } from '@/utils/helpers/uuid';

const Windows = () => {

  const dispatch = useAppDispatch()
  const {windows} = useAppSelector(state => state.windows)

  const addNewWidow = () => {
    dispatch(windowStore.addWindow({...mockWindows[0], id: uuid()}))
  }

  return (
    <div className='flex items-center gap-2 border-b border-gray-300 p-[2.5px] '>

     {windows.map(item => (
       <WindowItem item={item} />
     ))}

      <AppIcon 
        Icon={<AiOutlinePlus className='text-lg text-gray-600'/>}
        onClick={addNewWidow.bind(null)}
      />

    </div>
  )
};

export default Windows;
