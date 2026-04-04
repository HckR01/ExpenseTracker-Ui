export const Card = ({ children, title, className = "" }) => (
  <div
    className={`bg-white dark:bg-slate-800 rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-slate-700 transition-colors ${className}`}
  >
    {title && (
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h3>
    )}
    {children}
  </div>
);
