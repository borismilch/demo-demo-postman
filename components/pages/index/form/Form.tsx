import React from 'react';
import { useInputValue } from '@/hooks/.'

import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { responseReducer, windowStore } from '@/store/reducers'
import { useEffect } from 'react'
import windowReducer from '@/store/reducers/windowReducer';

const Form = () => {

  const [url, bind] = useInputValue()
  const [method, binded] = useInputValue()
  const {currentWindow} = useAppSelector(state => state.windows)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(windowStore.changeMethod(method || 'GET'))
  },[method])

  const sendReq = async () => {

    if (!url || !method) {
      alert('invalid request'); return 
    }

    const headers = currentWindow.headers.reduce((acc, item) => acc[item.key] = item.value , {})

    const params = {method, headers, 
      ...currentWindow.params.reduce((acc, item) => acc[item.key] = item.value ,{})}

    const response =  await fetch(url, params)  

    dispatch(responseReducer.startfetching())

    if (response.ok) {
     
      const json = await response.json()

      dispatch(responseReducer.successRequest({json, status: response.status}))
    } else {

      dispatch(responseReducer.failedRequest({error: 'request failed, Please check what are you doing', json: '', status: response.status}))

    }

  }

  return (
    <div className='flex items-center p-2 w-full'>

      <div className='flex items-center w-full'>

        <select {...binded} className='form w-[11 0px]  appearance-none rounded-l-md border-r border-gray-400'>
          <option selected value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>

        <input 
          className='form rounded-r-md mr-2 flex-grow w-full'
          type="text" 
          placeholder='https://example.com/'
          {...bind} 
        />

      </div>
      
      <button
        onClick={sendReq} 
        className='button_opt px-5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold disabled:opacity-50'
      >
        SEND
      </button>

    </div>
  )
};

export default Form;
