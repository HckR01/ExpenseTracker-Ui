import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialTransactions } from '../data';

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
    
    const [transactions, setTransactions] = useState(initialTransactions);
    
    
    const [isDarkMode, setIsDarkMode] = useState(true);

    
    const [isAdmin, setIsAdmin] = useState(true);

    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);
//add transaction here....................................................
    const addTransaction = (transaction) => {
        setTransactions(prev => [
            {
                ...transaction,
                id: `tx-${Date.now()}`,
                date: new Date().toLocaleDateString('en-US'),
                timestamp: Date.now()
            },
            ...prev
        ].sort((a, b) => b.timestamp - a.timestamp));//sort here
    };

    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    };

    // Derived state
    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalBalance = totalIncome - totalExpense;

    // Last 30 days total ..........................................
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    
    const monthlyIncome = transactions
        .filter(t => t.type === 'income' && t.timestamp > thirtyDaysAgo)
        .reduce((sum, t) => sum + t.amount, 0);

    const monthlyExpense = transactions
        .filter(t => t.type === 'expense' && t.timestamp > thirtyDaysAgo)
        .reduce((sum, t) => sum + t.amount, 0);

    const savingsRate = totalIncome > 0 
        ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) 
        : 0;
//distribute all over the app here...........................................
    const value = {
        transactions,
        addTransaction,
        deleteTransaction,
        totalIncome,
        totalExpense,
        totalBalance,
        monthlyIncome,
        monthlyExpense,
        savingsRate,
        isDarkMode,
        toggleDarkMode,
        isAdmin,
        setIsAdmin,
        isSidebarOpen,
        setIsSidebarOpen
    };

    return (
        <TransactionContext.Provider value={value}>
            {children}
        </TransactionContext.Provider>
    );
};
