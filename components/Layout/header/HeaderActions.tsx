import React from 'react';

import { AppButton } from '@/components/.'
import { ButtonProps } from '@/components/forms/AppButton';

const HeaderActions = () => {

  const buttons: ButtonProps[] = [
    {
      classes: '',
      text: 'Home',
      onClick: () => {},
    },
    {
      classes: '',
      text: 'WorkSpace',
      onClick: () => {},
    },
    {
      classes: '',
      text: 'Api Network',
      onClick: () => {},
    },
    {
      classes: '',
      text: 'Reports',
      onClick: () => {},
    },
    {
      classes: '',
      text: 'Explore',
      onClick: () => {},
    },
  ]

  return (
    <div className='flex items-center gap-2'>

      {
        buttons.map(item => (
          <AppButton {...item} />
        ))
      }

    </div>
  )
};

export default HeaderActions;
