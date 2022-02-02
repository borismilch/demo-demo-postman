import React from 'react';
import {BiError} from 'react-icons/bi'

import { useAppSelector } from '@/hooks/redux';

const ErrorMessage = () => {

  const { status, error } = useAppSelector(state => state.response)

  return (
    <div className='flex flex-col items-center justify-center gap-3'>

      <p className='text-5xl text-red-500'>{<BiError />}</p>

      <div className='flex flex-col text-center'>

        <h1 className='text-gray-600 text-2xl font-semibold'>
          status code: {status}
        </h1>

        <p className='text-gray-500 text-xl'>{error}</p>

      </div>

    </div>
  )
};

export default ErrorMessage;
