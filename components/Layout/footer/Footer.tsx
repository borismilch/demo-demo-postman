import React from 'react'

import { BiTerminal } from 'react-icons/bi'
import { VscTerminalCmd } from 'react-icons/vsc'

const Footer = () => {

  return (
    <footer className='flex justify-between fixed bottom-0 border-t border-gray-300 p-1 px-4 w-full'>

      <div className='flex items-center gap-3'>

        <BiTerminal className='text-sm text-gray-600' />

        <div className='flex items-center gap-1 hover:underline'>
          <VscTerminalCmd className='text-sm text-gray-600' />

          <p className='text-xs'>console</p>
        </div>

      </div>

      
      <div className='flex items-center gap-3'>

        <div className='flex items-center gap-1 hover:underline'>
          <VscTerminalCmd className='text-sm text-gray-600' />

          <p className='text-xs'>console</p>
        </div>

        <div className='flex items-center gap-1 hover:underline'>
          <VscTerminalCmd className='text-sm text-gray-600' />

          <p className='text-xs'>console</p>
        </div>

        <div className='flex items-center gap-1 hover:underline'>
          <VscTerminalCmd className='text-sm text-gray-600' />

          <p className='text-xs'>console</p>
        </div>

      </div>



    </footer>
  )
}

export default Footer
