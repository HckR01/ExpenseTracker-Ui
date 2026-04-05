import React from "react";
import { Moon, Sun, Plus, Menu } from "lucide-react";
import { useTransactions } from "../../context/TransactionContext";

export const Navbar = ({ onOpenModal }) => {
  const { isDarkMode, toggleDarkMode, isAdmin, setIsAdmin, setIsSidebarOpen } =
    useTransactions();

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 transition-colors">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className={`px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl text-xs md:text-base font-medium transition-colors border ${
            isAdmin
              ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800/30"
              : "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/30"
          }`}
        >
          Role: {isAdmin ? "Admin" : "User"}
        </button>

        {isAdmin && (
          <button
            onClick={onOpenModal}
            className="flex items-center gap-1 md:gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-sm md:text-base font-medium transition-colors"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add</span>
          </button>
        )}

        <button
          onClick={toggleDarkMode}
          className="p-1.5 md:p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center text-xs md:text-base text-white font-bold cursor-pointer">
          US
        </div>
      </div>
    </header>
  );
};
