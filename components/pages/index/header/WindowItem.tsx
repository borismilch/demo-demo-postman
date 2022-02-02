import React, { SyntheticEvent } from 'react';
import { methodsColors } from '@/utils/mock/requestsColors'

import { IWindowItem } from '@/models/.';
import { GrFormClose } from 'react-icons/gr'
import { AppIcon } from '@/components/.'

import { useAppDispatch } from "@/hooks/redux"
import {windowStore} from '@/store/reducers' 

const WindowItem: React.FC<{item: IWindowItem}> = ({item}) => {

  const color = methodsColors[item.method]
  const dispatch = useAppDispatch()

  const removeItem = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation()
    dispatch(windowStore.removeWindow(item.id))
  }

  const selectCurrentWindow = () => {
    dispatch(windowStore.setCurrentWindow(item))
  }

  return (
    <div
      onClick={selectCurrentWindow.bind(null)}
      className='p-2 border-t-2 flex rounded-sm cursor-pointer hover:bg-gray-100 group rounded-t-none items-center gap-2 bg-gray-50 ' 
      style={{borderColor: color}}
    >
    
      <p className={'text-xs font-medium '} style={{color}}>{item.method}</p>

      <p className='text-xs text-gray-500'>{item.name}</p>

      <div className='flex items-center'>

        <div className='pagination group-hover:hidden' style={{backgroundColor: color}} />

        <div  onClick={(e) => {removeItem(e)}}>
          <AppIcon 
            Icon={ <GrFormClose className='text-xs text-gray-500 hidden group-hover:flex cursor-pointer' />}
            classes='p-[2px]'
          />
        </div>

      </div>

    </div>
  )
};

export default WindowItem;
