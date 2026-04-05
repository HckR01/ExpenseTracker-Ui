import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center bg-[#F8FAFC] gap-2 dark:bg-slate-900 z-[100] transition-colors duration-300">
      <div className="relative flex items-center justify-center w-24 h-24 mb-4 rounded-3xl bg-indigo-600 shadow-2xl shadow-indigo-600/40 animate-bounce">
        <span className="text-4xl font-black text-white italic tracking-tighter">ex</span>
      </div>
      <h1 className="text-4xl font-black tracking-widest uppercase mb-8 flex gap-1">
        {"Expenso".split("").map((char, index) => (
          <span 
            key={index} 
            className="animate-bubble text-slate-800 dark:text-white"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
      
      <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
        <Loader2 className="animate-spin" size={28} />
        <span className="font-medium animate-pulse">Setting things up...</span>
      </div>
    </div>
  );
};
