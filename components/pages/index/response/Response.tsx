import React from 'react';
import { ResponcePlaceholder } from '..';
import { ErrorMessage } from '.'

import { useAppDispatch, useAppSelector } from '@/hooks/redux'

import { Loader } from '@/components/icons/loaders'
import { methodsColors } from '@/utils/mock/requestsColors'

const Response = () => {
  const dispatch = useAppDispatch()
  const { isSuccess, response, error, loading, status } = useAppSelector(state => state.response)
  const { currentWindow } = useAppSelector(state => state.windows)

  return (
    <div className='min-h-[330px] border-t border-gray-300'>

      <div className='flex items-center justify-between p-3 border-b border-gray-300'>

        <p className='text-gray-700 font-medium'>Response</p>

        <div className='flex items-center gap-2 pr-5'>
            Method: <p style={{color: methodsColors[currentWindow.method]}}>{currentWindow.method} </p>

            {status && <p>Status: {status}</p>}
        </div>  

      </div>

     { !response && !error && <ResponcePlaceholder />}

     <div className='flex flex-col'>

     </div>

      {
       loading && (
         <div className='flex items-center justify-center w-full h-full'>
            <Loader />
         </div>
       )
      }

      <div className='flex items-center overflow-auto p-3'>
        {response && (
          <p className='text-lg'>{JSON.stringify(response, null, 2)}</p>
        )}
      </div>

      {error && (
        <ErrorMessage />
      )}

    </div>
  )
};

export default Response;
