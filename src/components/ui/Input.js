import React from 'react';

function Input({ ...props }) {
  return (
    <input
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  );
}

export default Input;