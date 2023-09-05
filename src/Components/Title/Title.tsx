import React from 'react';

export interface TitleProps {children:React.ReactNode}

export function Title({children}:TitleProps) {
  return (
    <div className="Title">
      {children}
    </div>
  );
}
