import { TrendingDown, ShoppingBag, House } from "lucide-react";
import { Card } from "../UI/Card";
import { useTransactions } from "../../context/TransactionContext";

export const RecentExpenses = () => {
  const { transactions } = useTransactions();
  const expenseItems = transactions
    .filter((t) => t.type === "expense")
    .slice(0, 5);

  return (
    <Card
      id="recent-expenses"
      className="mb-6 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none dark:bg-slate-800"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingDown className="text-orange-500" size={20} />
          <h3 className="font-bold text-gray-700 dark:text-gray-200 text-lg">
            Recent Expenses
            <span className="text-gray-400 dark:text-gray-500 font-normal text-sm ml-1">
              (Top 5)
            </span>
          </h3>
        </div>
        <span className="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-bold">
          {expenseItems.length} records
        </span>
      </div>

      <div className="space-y-3">
        {expenseItems.length === 0 ? (
          <p className="text-center text-gray-400 py-4">No recent expenses</p>
        ) : (
          expenseItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-orange-50/30 dark:bg-orange-900/10 rounded-2xl border border-orange-50/50 dark:border-orange-800/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 p-3 rounded-xl">
                  {item.category === "Housing" ? (
                    <House size={20} />
                  ) : (
                    <ShoppingBag size={20} />
                  )}
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.category}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-orange-600 dark:text-orange-400">
                  -₹
                  {item.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500">
                  {item.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};
