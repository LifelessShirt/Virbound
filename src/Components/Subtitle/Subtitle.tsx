import React from 'react';

export interface SubtitleProps {children:React.ReactNode}

export function Subtitle({children}:SubtitleProps) {
  return (
    <div className="Subtitle">
      {children}
    </div>
  );
}
