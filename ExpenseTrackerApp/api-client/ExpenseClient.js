import axios from 'axios';

const FIREBASE_BASE_URL =
  'https://reactnativecourse-4e85e-default-rtdb.europe-west1.firebasedatabase.app/expenses.json';

async function getExpenses() {
  const response = await axios.get(FIREBASE_BASE_URL);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  console.log(expenses);

  return expenses;
}

function getExpense(id) {}

function createExpense(expenseData) {
  axios.post(FIREBASE_BASE_URL, expenseData);
}

function updateExpense(expenseData, id) {}

function deleteExpense(id) {}

const ExpenseClient = {
  getAllExpenses: getExpenses,
  getExpense: getExpense,
  createExpense: createExpense,
  updateExpense: updateExpense,
  deleteExpense: deleteExpense,
};

export default ExpenseClient;
