/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// My implementation (ugly af)

function calculateTotalSpentByCategory(transactions) {
  const hashset = new Set();

  // Finding all the category types
  for (let transaction of transactions) {
    hashset.add(transaction.category);
  }

  // Calculating total price for each category type
  const res = [];
  for (let category of hashset) {
    const totalSpent = transactions
      .filter((transaction) => transaction.category === category)
      .map((transaction) => transaction.price)
      .reduce((acc, price) => acc + price);

    res.push({
      [category]: totalSpent,
    });
  }

  return res;
}

// From ChatGPT (much cleaner implementation)

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = transactions.reduce((acc, transaction) => {
    const { category, price } = transaction;
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  // categoryTotals is like this { category1: price1, category2: price2,... }
  // We need answer as [ { category1: price1 }, { category2: price2 },... ]
  const result = Object.entries(categoryTotals).map(([category, total]) => ({
    [category]: total,
  }));

  return result;
}

const transactions = [
  {
    itemName: "Item 1",
    category: "Groceries",
    price: 50,
    timestamp: Date.now(),
  },
  {
    itemName: "Item 2",
    category: "Electronics",
    price: 1000,
    timestamp: Date.now(),
  },
  {
    itemName: "Item 3",
    category: "Groceries",
    price: 30,
    timestamp: Date.now(),
  },
  {
    itemName: "Item 4",
    category: "Clothing",
    price: 80,
    timestamp: Date.now(),
  },
  {
    itemName: "Item 5",
    category: "Electronics",
    price: 500,
    timestamp: Date.now(),
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
