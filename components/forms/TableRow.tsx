import React, { ChangeEvent } from 'react';
import { IParam } from '@/models/form/IWindowItem';

import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { windowStore } from '@/store/reducers'

import { AppIcon } from '@/components/forms'
import { IoCloseSharp } from 'react-icons/io5'

const TableRow: React.FC<{param: IParam, idx: number}> = ({param, idx}) => {

  const dispatch = useAppDispatch()
  const { activeTab } = useAppSelector(state => state.tabs)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(windowStore.changeItemTable({table: activeTab.toLowerCase(), row: idx, val:e.target.value, field: e.target.name}))
  }

  const deleteItem = () => {
    dispatch(windowStore.deleteRow({key:activeTab.toLowerCase(), idx}))
  }

  return (

    <div className='grid grid-cols-10 w-full relative'>

      <div className='row_item col-span-1 pr-4'></div>

        {Object.keys(param).map(key => 
          <div className='row_item border-l border-gray-300  '>
            <input 
              value={param[key] } 
              onChange={onChange} 
              name={key} 
              type="text" 
              placeholder={key[0].toUpperCase() + key.slice(1)}
              className='clean_input border pl-0 border-transparent h-[30px] w-full max-w-[100%]  focus:border-gray-400 rounded-md' 
            />
          </div>
        )}

        <div className='absolute right-3 top-[50%]'>
          <AppIcon 
            onClick={deleteItem.bind(null)}
            Icon={<IoCloseSharp className='text-gray-700 text-lg' />}
            classes='transform translate-y-[-40%]'
          />
        </div>
    </div>

  )
};

export default TableRow;
