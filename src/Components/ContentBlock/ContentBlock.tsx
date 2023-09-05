import React from 'react';

export interface ContentBlockProps {children:React.ReactNode}

export function ContentBlock({children}:ContentBlockProps) {
  return (
    <div className="ContentBlock">
      {children}
    </div>
  );
}
