import React, { ChangeEvent } from 'react';
import { useInputValue } from '@/hooks/.'
import { useState } from 'react'
import { windowStore } from '@/store/reducers'

const Body = () => {
  const [val, setVal] = useState<string>('')
  
  const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value)
    windowStore.changeBody(val)
  }

  return (
    <textarea 
      onChange={onChange}
      rows={8} 
      value={val}
      className='focus:ring-0 border border-gray-300 focus:border-gray-300'>
      
    </textarea>
  )
};

export default Body;
