import React from 'react';
import { setActiveTab } from '@/store/reducers'
import { useAppSelector, useAppDispatch } from '@/hooks/redux';

const tabs = ['Params','Headers', 'Body']

const FormTabs = () => {

  const dispatch = useAppDispatch()
  const {activeTab} = useAppSelector(state => state.tabs)

  const setTab = (val: string) => {
    dispatch(setActiveTab(val))
  }

  return (
    <div className='flex items-center justify-between gap-2 px-2 border-t border-gray-300'>

      <div className='flex items-center'>
        {
        tabs.map(item => (
          <button 
            onClick={setTab.bind(null, item)}
            key={item} 
            className={activeTab === item ? "active_tab" : 'tab'}
          >
            {item}
          </button>
        ))
        }
      </div>

      <p className='text-blue-600 text-xs font-medium'>
        Cookies
      </p>

    </div>
  )
};

export default FormTabs;
