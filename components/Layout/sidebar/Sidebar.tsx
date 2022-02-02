import React from 'react';

import { SidebarCollection, SidebarHeader } from '.';

const Sidebar = () => {
  return (
    <div className='flex flex-col w-full h-screen border-r border-gray-300 max-w-[380px] bg-gray-50'>

      <SidebarHeader />

      <SidebarCollection />
    </div>
  )
};

export default Sidebar;
