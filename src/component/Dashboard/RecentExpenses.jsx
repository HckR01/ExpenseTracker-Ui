import { TrendingDown, ShoppingBag, House } from "lucide-react";
import { Card } from "../UI/Card";

export const RecentExpenses = () => {
  const expenseItems = [
    {
      name: "groceries",
      category: "Food",
      amount: 280,
      date: "4/3/2026",
    },
    {
      name: "rent",
      category: "Housing",
      amount: 1200,
      date: "4/1/2026",
    },
  ];

  return (
    <Card className="mb-6 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingDown className="text-orange-500" size={20} />
          <h3 className="font-bold text-gray-700 text-lg">
            Recent Expenses
            <span className="text-gray-400 font-normal text-sm ml-1">
              (This Month)
            </span>
          </h3>
        </div>
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
          {expenseItems.length} records
        </span>
      </div>

      <div className="space-y-3">
        {expenseItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-orange-50/30 rounded-2xl border border-orange-50/50"
          >
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                {item.category === "Housing" ? (
                  <House size={20} />
                ) : (
                  <ShoppingBag size={20} />
                )}
              </div>
              <div>
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-orange-600">
                -{item.amount.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
