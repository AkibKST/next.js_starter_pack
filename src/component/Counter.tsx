"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Counter</h1>
        <div className="text-6xl font-bold mb-8 text-blue-600">{count}</div>
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
