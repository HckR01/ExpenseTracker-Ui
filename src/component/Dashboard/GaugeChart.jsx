import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const GaugeChart = ({ title, value, percentage, color }) => {
  const data = [{ value: percentage }, { value: 100 - percentage }];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h4 className="text-emerald-600 font-bold mb-4">{title}</h4>
      <div className="h-40 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              <Cell fill={color} stroke="none" />
              <Cell fill="#f1f5f9" stroke="none" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
          <span className="text-2xl font-bold text-gray-800">
            ₹{value.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400">{Number(percentage).toFixed(2)}%</span>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2">This Month data</p>
    </div>
  );
};
