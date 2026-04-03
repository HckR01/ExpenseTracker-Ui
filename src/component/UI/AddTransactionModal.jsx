import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTransactions } from '../../context/TransactionContext';

export const AddTransactionModal = ({ isOpen, onClose }) => {
    const { addTransaction } = useTransactions();
    
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('expense');
    const [category, setCategory] = useState('Food');
    const [error, setError] = useState('');

    const categories = {
        income: ['Salary', 'Freelance', 'Investments', 'Gift'],
        expense: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Health']
    };

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !amount) {
            setError('Please fill all fields');
            return;
        }

        const numAmount = parseFloat(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            setError('Please enter a valid amount');
            return;
        }

        addTransaction({
            name,
            amount: numAmount,
            type,
            category
        });

        // Reset and close
        setName('');
        setAmount('');
        setType('expense');
        setCategory('Food');
        setError('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                    <X size={24} />
                </button>
                
                <h2 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Add New Transaction</h2>
                
                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-4 mb-4">
                        <button
                            type="button"
                            onClick={() => { setType('expense'); setCategory(categories.expense[0]); }}
                            className={`flex-1 py-2 rounded-xl text-center font-semibold transition-colors ${
                                type === 'expense' 
                                    ? 'bg-rose-100 text-rose-600 border border-rose-200' 
                                    : 'bg-gray-50 text-gray-500 border border-transparent dark:bg-slate-700 dark:text-gray-300'
                            }`}
                        >
                            Expense
                        </button>
                        <button
                            type="button"
                            onClick={() => { setType('income'); setCategory(categories.income[0]); }}
                            className={`flex-1 py-2 rounded-xl text-center font-semibold transition-colors ${
                                type === 'income' 
                                    ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' 
                                    : 'bg-gray-50 text-gray-500 border border-transparent dark:bg-slate-700 dark:text-gray-300'
                            }`}
                        >
                            Income
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Groceries"
                            className="w-full px-4 py-2 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none dark:bg-slate-700 dark:text-white transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full px-4 py-2 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none dark:bg-slate-700 dark:text-white transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none dark:bg-slate-700 dark:text-white transition-colors"
                        >
                            {categories[type].map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors mt-6"
                    >
                        Save Transaction
                    </button>
                </form>
            </div>
        </div>
    );
};
