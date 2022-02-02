import React, { ReactElement } from 'react';

export interface ButtonProps {
  text: string,
  onClick: () => void,
  Icon?: ReactElement<any,any>
  classes?: string
}

const Button: React.FC<ButtonProps> = ({text, Icon, onClick, classes = ''}) => {
  return (
    <button className={'text-gray-500 hover:text-gray-800 px-3 transition-all duration-200 cursor-pointer font-medium ' + classes}>
      {Icon}

      <p>{text}</p>
    </button>
  )
};

export default Button;
