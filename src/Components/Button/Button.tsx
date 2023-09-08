import React from 'react';
import Style from './Button.module.css';

export interface ButtonProps {children:React.ReactNode,type?:string}

export function Button({children,type}:ButtonProps) {
  return (
    <button className={`${Style.Button} ${type == 'focus' ? Style.ButtonFocus : ''}`}>
      {children}
    </button>
  );
}
