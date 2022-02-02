import React from 'react';

import { HeaderActions, HeaderSearch, RightHeaderSection } from '.';
import { Logo } from '@/components/icons'; 

const Header = () => {
  return (
    <header className='flex items-center w-full p-2 border-b border-gray-300 justify-between'>

      <div className='flex items-center gap-0'>
        <Logo />

        <HeaderActions />
      </div>

      <HeaderSearch />
    
      <RightHeaderSection />  
    </header>
  );
};

export default Header;
