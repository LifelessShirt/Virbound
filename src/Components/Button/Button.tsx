import React, { useEffect, useState } from 'react';
import Style from './Button.module.css';

export interface ButtonProps {children:React.ReactNode,type?:string,customOnClick?:string}

export function Button({children,type,customOnClick}:ButtonProps) {
  const [btnType, setBtnType] = useState('default');
  const [child, setChild] = useState(children);
  const clickFunc = (e:any) => {
    if (e === 'copyIP') {
      navigator.clipboard.writeText('srv.virbound.com');
      setChild("IP copied");
    } else {
      // nothing
    }
  }

  useEffect(() => {
    switch (type) {
      case 'focus': 
        setBtnType('ButtonFocus');
        break;
      
      case 'inline': 
        setBtnType('ButtonInline');
        break;
      
        case 'transparent': 
          setBtnType('ButtonTransparent');
          break;
      
      default: 
        setBtnType('default');
        break;
    }
  }, []);
  
  return (
    <button className={`${Style.Button} ${Style[btnType]}`} onClick={() => clickFunc(customOnClick)}>
      {child}
    </button>
  );
}
