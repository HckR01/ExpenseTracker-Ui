import React, { useState } from 'react';
import { Card } from '../UI/Card';
import { useTransactions } from '../../context/TransactionContext';
import { Utensils, RefreshCw, ArrowUpRight, ArrowDownRight, Trash2 } from 'lucide-react';

export const TransactionHistory = () => {
    const { transactions, deleteTransaction, isAdmin } = useTransactions();
    const [filter, setFilter] = useState('all'); // 'all', 'income', 'expense'

    const filteredTransactions = transactions.filter(t => {
        if (filter === 'all') return true;
        return t.type === filter;
    });

    return (
        <Card>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl">
                        <RefreshCw size={20} />
                    </span>
                    All Transactions
                </h3>
                
                <div className="flex gap-2 items-center">
                    {/* Dropdown for small screens */}
                    <div className="md:hidden">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-white text-sm rounded-lg border-none focus:ring-2 focus:ring-indigo-500 block w-full p-2"
                        >
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>

                    {/* Buttons for medium+ screens */}
                    <div className="hidden md:flex gap-2">
                        <button 
                            onClick={() => setFilter('all')}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300'}`}
                        >
                            All
                        </button>
                        <button 
                            onClick={() => setFilter('income')}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${filter === 'income' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300'}`}
                        >
                            Income
                        </button>
                        <button 
                            onClick={() => setFilter('expense')}
                            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${filter === 'expense' ? 'bg-rose-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-300'}`}
                        >
                            Expense
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {filteredTransactions.length === 0 ? (
                    <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                        No transactions found
                    </div>
                ) : (
                    filteredTransactions.map((t) => (
                        <div
                            key={t.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors border border-gray-100 dark:border-slate-700 group"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl ${
                                    t.type === 'income' 
                                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' 
                                        : 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
                                }`}>
                                    {t.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 dark:text-gray-100">{t.name}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                        {t.date} • {t.category}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`font-bold ${
                                    t.type === 'income' ? 'text-emerald-500' : 'text-slate-800 dark:text-gray-200'
                                }`}>
                                    {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                </span>
                                
                                {isAdmin && (
                                    <button 
                                        onClick={() => deleteTransaction(t.id)}
                                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition-opacity p-1"
                                        title="Delete Transaction"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Card>
    );
};
