import { Utensils, RefreshCw, Info, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTransactions } from "../../context/TransactionContext";

export const TransactionList = () => {
  const { transactions } = useTransactions();
  const recentTransactions = transactions.slice(0, 5); // display top 5

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
          <span className="bg-indigo-100 dark:bg-indigo-900/50 p-1 rounded-full">
            <RefreshCw size={14} />
          </span>
          Recent Transactions
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-xl text-xs flex items-center gap-2">
        <Info size={14} /> Transactions are stacked by date (newest first)
      </div>

      {recentTransactions.map((t) => (
        <div
          key={t.id}
          className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-100 dark:hover:border-slate-600"
        >
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${
              t.type === 'income' 
                  ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' 
                  : 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
            }`}>
              {t.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{t.name}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {t.date} • {t.category}
              </p>
            </div>
          </div>
          <span className={`font-bold ${t.type === 'income' ? 'text-emerald-500' : 'text-slate-800 dark:text-gray-200'}`}>
            {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
          </span>
        </div>
      ))}

      <button className="w-full text-center text-sm text-emerald-600 dark:text-emerald-400 font-medium py-2 hover:underline">
        View All Transactions ({transactions.length})
      </button>
    </div>
  );
};
