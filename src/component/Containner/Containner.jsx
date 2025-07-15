import React from 'react';

const Containner = ({children , className}) => {
    const yeasinClasses = `  max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`;
  return (
    <div className={yeasinClasses}>
        {children}
     
    </div>
  );
};


export default Containner;
