'use client';

import React, { useState } from 'react';

export default function IncrementButton() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert('Count cannot exceed 20');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('Count cannot be negative');
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center p-20">
        <button  
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        onClick={increment}>
            +
        </button>
        <p className="text-lg font-bold p-4 ">{count}</p>
        <button 
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        onClick={decrement}>
            -
        </button>
    </div>
  );
}
