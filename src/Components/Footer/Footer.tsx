import React from 'react';

export interface FooterProps {children:React.ReactNode}

export function Footer() {
  return (
    <div className="Footer">
      Design and development: <a href="https://lifeless.me" target="_blank">Lifeless Shirt</a>.
    </div>
  );
}
