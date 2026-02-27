"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-slate-950 to-slate-900">
      <div className="bg-slate-900 p-8 rounded-lg shadow-2xl text-center border border-indigo-600/30">
        <h1 className="text-5xl font-bold mb-8 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Counter
        </h1>
        <div className="text-8xl font-bold mb-8 text-indigo-500">{count}</div>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setCount(count - 1)}
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/50"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-8 py-3 bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-600/50"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-600/50"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};
