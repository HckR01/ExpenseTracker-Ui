import { TrendingUp, CreditCard, Banknote } from "lucide-react";
import { Card } from "../UI/Card";

export const RecentIncome = () => {
  const incomeItems = [
    {
      name: "freelance",
      category: "Freelance",
      amount: 1500,
      date: "4/3/2026",
    },
    { name: "salary", category: "Food", amount: 100000, date: "4/3/2026" },
  ];

  return (
    <Card className="mb-6 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="text-emerald-500" size={20} />
          <h3 className="font-bold text-gray-700 text-lg">
            Recent Income{" "}
            <span className="text-gray-400 font-normal text-sm ml-1">
              (This Month)
            </span>
          </h3>
        </div>
        <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
          {incomeItems.length} records
        </span>
      </div>

      <div className="space-y-3">
        {incomeItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-emerald-50/30 rounded-2xl border border-emerald-50/50"
          >
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl">
                {item.category === "Freelance" ? (
                  <CreditCard size={20} />
                ) : (
                  <Banknote size={20} />
                )}
              </div>
              <div>
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-emerald-600">
                +{item.amount.toLocaleString()}
              </p>
              <p className="text-[10px] text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
