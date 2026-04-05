import { X } from "lucide-react";
import { useTransactions } from "../../context/TransactionContext";

const navItems = [
  { name: "Dashboard", icon: "📊", active: true, scrollTo: "dashboard-top" },
  { name: "Income", icon: "📈", scrollTo: "recent-income" },
  { name: "Expenses", icon: "📉", scrollTo: "recent-expenses" },
  { name: "Profile", icon: "👤" },
];

export const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useTransactions();

  const handleNavClick = (item) => {
    if (item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Close sidebar on mobile after clicking
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 p-6 flex flex-col transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-10">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick({ scrollTo: "dashboard-top" })}
          >
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
              ET
            </div>
            <h1 className="text-xl font-bold italic text-slate-800 dark:text-white">
              Expense Tracker
            </h1>
          </div>

          <button
            className="md:hidden text-slate-500 dark:text-slate-400 p-1"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${item.active ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-semibold" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700/50"}`}
            >
              <span>{item.icon}</span> {item.name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
