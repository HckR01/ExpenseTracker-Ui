import { Plus } from "lucide-react";
import { useTransactions } from "../../context/TransactionContext";

export const MainOverview = ({ onOpenModal }) => {
  const { isAdmin } = useTransactions();

  return (
    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl p-8 relative overflow-hidden border border-emerald-100 dark:border-emerald-800/30 mb-8 transition-colors">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-2">
          Finance Dashboard
        </h1>
        <p className="text-emerald-700 dark:text-emerald-500 opacity-80 mb-6">
          Track your income and expenses
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isAdmin && (
              <button 
                onClick={onOpenModal}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-emerald-200 dark:shadow-none"
              >
                <Plus size={20} /> Add Transaction
              </button>
            )}
          </div>

          <div className="flex bg-white/50 backdrop-blur-sm p-1 rounded-xl border border-white/50">
            {["Daily", "Weekly", "Monthly"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${tab === "Monthly" ? "bg-emerald-500 text-white shadow-sm" : "text-emerald-700 hover:bg-white/50"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative circle in background */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
    </div>
  );
};
