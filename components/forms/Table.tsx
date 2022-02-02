import React, { useEffect } from 'react';

import { useAppSelector } from '@/hooks/redux'
import { TableRow } from '.'

import { IParam } from '@/models/.';
import { useAppDispatch } from '@/hooks/redux';
import { windowStore } from '@/store/reducers'
import { HiViewGridAdd } from 'react-icons/hi'

import { useRef } from 'react'

const mockrow: IParam = {
  key: '',
  value: '',
  description: '',
 
}

const Table = () => {

  const tableRef = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()

  const { activeTab } = useAppSelector(state => state.tabs)
  const { currentWindow } = useAppSelector(state => state.windows)

  const addNewRow = () => {
    dispatch(windowStore.addRow({param: mockrow, key: activeTab.toLowerCase()}))
  }

  useEffect(() => {

    tableRef && tableRef.current.scrollBy({
      top: 100,
      behavior: "smooth"
    })
   
  }, [currentWindow])
  
  return (
    <div className='flex flex-col'>

      <div className='grid grid-cols-10  divide-x divide-gray-300'>
        <p className='text-gray-800 font-semibold col-span-1 px-3 p-2 border-t border-b '></p>
        <p className='row_item '>Key</p>
        <p className='row_item'>value</p>
        <p className='row_item'>Description</p>
      </div>
      
      <div ref={tableRef} className='flex border-b border-gray-300 items-center flex-col w-full overflow-auto scrollbar-thin max-h-[200px]'>
        {
          currentWindow && Object.keys(currentWindow[activeTab.toLowerCase()]).map((key, idx,) => (
            <TableRow idx={idx} param={currentWindow[activeTab.toLowerCase()][key]} />
          ))
        }
      </div>

      <button 
        onClick={addNewRow.bind(null)}
        className='button_opt bg-orange-500 inline-flex min-w-[80px] max-w-[120px] m-3 text-white hover:bg-orange-600  items-center gap-2'>
        <p className='text-sm font-semibold'>Add new</p>

        <HiViewGridAdd className='text-white text-xl' />
      </button>


    </div>
  )
};

export default Table;
