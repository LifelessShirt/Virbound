import React, { useState } from 'react';
import Style from './Button.module.css';

export interface ButtonProps {children:React.ReactNode,type?:string,customOnClick?:string}

export function Button({children,type,customOnClick}:ButtonProps) {
  const [child, setChild] = useState(children);
  const clickFunc = (e:any) => {
    if (e === 'copyIP') {
      navigator.clipboard.writeText('srv.virbound.com');
      setChild("IP copied");
    } else {
      // nothing
    }
  }

  return (
    <button className={`${Style.Button} ${type == 'focus' ? Style.ButtonFocus : ''}`} onClick={() => clickFunc(customOnClick)}>
      {child}
    </button>
  );
}
