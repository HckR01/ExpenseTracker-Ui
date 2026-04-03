import React, { useState } from "react";
import { Sidebar } from "./component/layout/Sidebar";
import { Navbar } from "./component/layout/Navbar";
import { StatCard } from "./component/Dashboard/StatCard";
import { MainOverview } from "./component/Dashboard/MainOverview";
import { GaugeChart } from "./component/Dashboard/GaugeChart";
import { TransactionList } from "./component/Dashboard/Transaction";
import { TransactionHistory } from "./component/Dashboard/TransactionHistory";
import { RecentIncome } from "./component/Dashboard/RecentIncome";
import { RecentExpenses } from "./component/Dashboard/RecentExpenses";
import { Card } from "./component/UI/Card";
import { AddTransactionModal } from "./component/UI/AddTransactionModal";
import { useTransactions } from "./context/TransactionContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { 
    totalIncome, 
    totalExpense, 
    totalBalance, 
    monthlyIncome, 
    monthlyExpense, 
    savingsRate 
  } = useTransactions();

  return (
    <div className="flex bg-[#F8FAFC] dark:bg-slate-900 min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors">
      <Sidebar />

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <div className="flex-1 overflow-y-auto p-8">
          {/* Top Row: 4 Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Balance"
              amount={totalBalance}
              trend={0}
              color="bg-indigo-500"
              icon="💰"
            />
            <StatCard
              title="Monthly Income"
              amount={monthlyIncome}
              trend={0}
              color="bg-emerald-500"
              icon="📈"
            />
            <StatCard
              title="Monthly Expenses"
              amount={monthlyExpense}
              trend={0}
              color="bg-orange-500"
              icon="📉"
            />
            <StatCard
              title="Savings Rate"
              amount={savingsRate}
              trend={0}
              color="bg-cyan-500"
              icon="🐷"
              isPercentage={true}
            />
          </div>

          {/* Main Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT & MIDDLE COLUMN */}
            <div className="lg:col-span-2 space-y-6">
              <MainOverview onOpenModal={() => setIsModalOpen(true)} />

              {/* The 3 Gauge Charts Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <GaugeChart
                    title="Income"
                    value={monthlyIncome}
                    percentage={100}
                    color="#10b981"
                  />
                </Card>
                <Card>
                  <GaugeChart
                    title="Spent"
                    value={monthlyExpense}
                    percentage={monthlyIncome > 0 ? (monthlyExpense/monthlyIncome)*100 : 0}
                    color="#f97316"
                  />
                </Card>
                <Card>
                  <GaugeChart
                    title="Savings"
                    value={monthlyIncome - monthlyExpense > 0 ? monthlyIncome - monthlyExpense : 0}
                    percentage={savingsRate}
                    color="#06b6d4"
                  />
                </Card>
              </div>

              {/* NEW: Transaction History Card with Filter placed here */}
              <TransactionHistory />

              <RecentIncome />
              <RecentExpenses />
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <TransactionList />

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-slate-700">
                  <h4 className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-200 mb-4">
                    <span className="text-blue-500">🔵</span> Spending by Category
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-xl">
                      <p className="text-[10px] text-cyan-700 dark:text-cyan-400 font-bold uppercase">
                        Total Income
                      </p>
                      <p className="text-sm font-black text-slate-800 dark:text-white">${totalIncome.toLocaleString()}</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-xl">
                      <p className="text-[10px] text-orange-700 dark:text-orange-400 font-bold uppercase">
                        Total Expenses
                      </p>
                      <p className="text-sm font-black text-slate-800 dark:text-white">${totalExpense.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <AddTransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;
