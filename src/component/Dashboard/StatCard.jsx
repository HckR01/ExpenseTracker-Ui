import { Card } from "../UI/Card";

export const StatCard = ({ title, amount, trend, icon, color, isPercentage }) => (
  <Card className="flex flex-col gap-2">
    <div className="flex justify-between items-center">
      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</span>
      <div className={`p-2 rounded-lg ${color} bg-opacity-10 dark:bg-opacity-20 text-xl`}>
        {icon}
      </div>
    </div>
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      {isPercentage ? `${amount}%` : `₹${amount.toLocaleString()}`}
    </h2>
    <div
      className={`text-sm ${trend >= 0 ? "text-emerald-500" : "text-orange-500"}`}
    >
      {trend >= 0 ? "+" : ""}
      {trend}% <span className="text-gray-400 dark:text-gray-500 ml-1">from last month</span>
    </div>
  </Card>
);
