import React from 'react';

const buttonVariants = [
  'inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    primary: 'bg-[#1A1A1A] text-white hover:bg-[#2C2C2C] active:scale-95',
    secondary: 'bg-[#D4A574] text-white hover:bg-[#c49566] active:scale-95',
    outline: 'border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white active:scale-95'
  },
  {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }
];

function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) {
  const classes = [
    buttonVariants[0],
    buttonVariants[1][variant],
    buttonVariants[2][size],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
