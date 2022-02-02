import React from 'react';

import { Options, Windows } from '.'
import { useAppSelector } from '@/hooks/redux';

const FormHeader = () => {

  const { currentWindow } = useAppSelector(state => state.windows)

  return (
    <div className='flex flex-col'>

      <Windows />

    { currentWindow && <Options />}
      
    </div>
  )
};

export default FormHeader;
