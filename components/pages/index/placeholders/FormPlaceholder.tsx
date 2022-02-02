import React from 'react';

import { Placeholder } from '@/components/icons'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const FormSplaceholder = () => {
  return (
    <div className='flex items-center flex-col justify-center gap-10'>

      <div className='pt-[120px] opacity-[8%]'>
      <Placeholder />
      </div>
      
      <button className='flex button_opt items-center gap-2'>

        <FaExternalLinkSquareAlt className='text-lg text-gray-800' />

        <p>Go to Sources</p>
      </button>
    </div>
  )
};

export default FormSplaceholder;
