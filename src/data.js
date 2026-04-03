export const generateMockData = () => {
    const transactions = [];
    const categories = {
        income: ['Salary', 'Freelance', 'Investments', 'Gift'],
        expense: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Health']
    };

    const today = new Date();
    
    // Generate transactions for the last 30 days
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // 1-3 transactions per day
        const numTransactions = Math.floor(Math.random() * 3) + 1;
        
        for (let j = 0; j < numTransactions; j++) {
            // 20% chance of income, 80% chance of expense
            const isIncome = Math.random() < 0.2;
            const type = isIncome ? 'income' : 'expense';
            
            const categoryList = categories[type];
            const category = categoryList[Math.floor(Math.random() * categoryList.length)];
            
            // Income amounts between 500 and 3000, Expense between 10 and 200
            const amount = isIncome 
                ? Math.floor(Math.random() * 2500) + 500
                : Math.floor(Math.random() * 190) + 10;
                
            const names = {
                'Food': ['Groceries', 'Restaurant', 'Coffee Shop', 'Snacks'],
                'Transport': ['Gas', 'Uber', 'Bus Ticket', 'Train'],
                'Utilities': ['Electricity Bill', 'Internet', 'Water Bill', 'Phone Plan'],
                'Entertainment': ['Movie Tickets', 'Netflix', 'Spotify', 'Concert'],
                'Shopping': ['Clothes', 'Shoes', 'Electronics', 'Books'],
                'Health': ['Pharmacy', 'Doctor Visit', 'Gym Membership', 'Vitamins'],
                'Salary': ['Monthly Salary', 'Bonus'],
                'Freelance': ['Client Project', 'Consulting'],
                'Investments': ['Dividends', 'Stock Sale'],
                'Gift': ['Birthday Gift', 'Cashback']
            };
            
            const nameOptions = names[category];
            const name = nameOptions[Math.floor(Math.random() * nameOptions.length)];

            transactions.push({
                id: `tx-${date.getTime()}-${j}`,
                name: name,
                category: category,
                amount: amount,
                // Format date as M/D/YYYY to match current UI format
                date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
                type: type,
                timestamp: date.getTime()
            });
        }
    }
    
    // Sort transactions by date descending (newest first)
    return transactions.sort((a, b) => b.timestamp - a.timestamp);
};

export const initialTransactions = generateMockData();
