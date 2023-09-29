import React from 'react';
import Style from './Button.module.css';

export interface ButtonProps {children:React.ReactNode,type?:string,customOnClick?:string}

export function Button({children,type,customOnClick}:ButtonProps) {
  const clickFunc = (e:any) => {
    if (e === 'copyIP') {
      navigator.clipboard.writeText('srv.virbound.com');
      children = "IP скопійовано";
      alert('IP скопійовано');
    } else {
      // nothing
    }
  }

  return (
    <button className={`${Style.Button} ${type == 'focus' ? Style.ButtonFocus : ''}`} onClick={() => clickFunc(customOnClick)}>
      {children}
    </button>
  );
}
