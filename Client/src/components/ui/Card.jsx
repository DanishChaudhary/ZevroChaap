import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'rounded-xl shadow-soft transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-gray-200',
    dark: 'bg-zevro-maroon-900 border border-zevro-maroon-800 text-white',
    flame: 'bg-gradient-to-br from-zevro-flame-50 to-zevro-flame-100 border border-zevro-flame-200',
    gold: 'bg-gradient-to-br from-zevro-gold-50 to-zevro-gold-100 border border-zevro-gold-200',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
  };
  
  const hoverEffect = hover ? 'hover:shadow-hard hover:-translate-y-1 cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverEffect} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 pb-4 ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
