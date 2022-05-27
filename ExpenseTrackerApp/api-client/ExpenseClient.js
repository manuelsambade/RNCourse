import axios from 'axios';

const FIREBASE_BASE_URL =
  'https://reactnativecourse-4e85e-default-rtdb.europe-west1.firebasedatabase.app';

async function getExpenses() {
  const response = await axios.get(`${FIREBASE_BASE_URL}/expenses.json`);

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

  return expenses;
}

function getExpense(id) {}

async function postExpense(expenseData) {
  const response = await axios.post(
    `${FIREBASE_BASE_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
}

function putExpense(id, expenseData) {
  return axios.put(`${FIREBASE_BASE_URL}/expenses/${id}.json`, expenseData);
}

function deleteExpense(id) {
  return axios.delete(`${FIREBASE_BASE_URL}/expenses/${id}.json`);
}

const ExpenseClient = {
  getAllExpenses: getExpenses,
  getExpense: getExpense,
  postExpense: postExpense,
  putExpense: putExpense,
  deleteExpense: deleteExpense,
};

export default ExpenseClient;
