import React, { ReactElement } from 'react';

const AppIcon: React.FC<{Icon: ReactElement<any, any>, classes?: string, onClick?: () => void}>= ({Icon, onClick = () => {}, classes = ''}) => {
  return (
    <div
     onClick={onClick.bind(null)}
     className={'icon group ' + classes}>

      {Icon}
      
    </div>
  )
};

export default AppIcon;
