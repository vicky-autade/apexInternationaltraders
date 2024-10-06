import React from 'react';

function Button({ children, ...props }) {
  return (
    <button
      className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;