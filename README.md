<h1>💰 Expense Tracker Dashboard</h1>
A modern, responsive financial dashboard built to help users track transactions, visualize spending patterns, and manage roles. This project was developed as a technical assignment, focusing on clean UI/UX and efficient state management.

🔗 Live Demo: expense-tracker-ui-xi.vercel.app

🚀 Features

1. Financial Overview
   Summary Cards: Real-time calculation of Total Balance, Income, and Expenses.

Data Visualization: \* Trend Analysis: Time-based line/area charts showing balance flow using Recharts.

Category Breakdown: Donut/Pie charts to visualize where money is being spent.

2. Transaction Management
   Detailed List: View Date, Amount, Category, and Type (Income/Expense).

Search & Filter: Quickly find transactions by name or filter by category/type.

Empty States: Graceful handling of "No Data Found" scenarios.

3. Role-Based UI (RBAC Simulation)
   Dynamic Access Control: Toggle between Admin and Viewer roles.

Admin: Full access to add, edit, or delete transactions.

Viewer: Read-only access—action buttons are contextually hidden or disabled to ensure data integrity.

4. Smart Insights
   Automatic identification of the Highest Spending Category.

Monthly comparison logic to track financial growth or overspending.

🛠️ Tech Stack
Framework: React 19 (Functional Components, Hooks)

Build Tool: Vite (For ultra-fast development and optimized bundling)

Styling: Tailwind CSS 4.0 (Utility-first CSS for a custom, responsive design)

Icons: Lucide React (Clean, consistent SVG icons)

Charts: Recharts (Composable charting library for React)

Deployment: Vercel
