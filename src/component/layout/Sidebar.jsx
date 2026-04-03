const navItems = [
  { name: "Dashboard", icon: "📊", active: true },
  { name: "Income", icon: "📈" },
  { name: "Expenses", icon: "📉" },
  { name: "Profile", icon: "👤" },
];

export const Sidebar = () => (
  <aside className="w-64 h-screen bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 p-6 flex flex-col transition-colors">
    <div className="flex items-center gap-2 mb-10">
      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
        ET
      </div>
      <h1 className="text-xl font-bold italic text-slate-800 dark:text-white">Expense Tracker</h1>
    </div>
    <nav className="flex-1 space-y-2">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${item.active ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-semibold" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50"}`}
        >
          <span>{item.icon}</span> {item.name}
        </button>
      ))}
    </nav>
  </aside>
);
