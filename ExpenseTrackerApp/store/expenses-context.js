import { createContext, useReducer } from 'react';
import { DUMMY_EXPENSES } from '../constants/dummy-data';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatedIdx = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatableExpense = state[updatedIdx];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.data,
      };

      const updatedExpenses = [...state];
      updatedExpenses[updatedIdx] = updatedItem;

      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

const ExpensesContextProvider = ({ children }) => {
  const [exponsesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({
      type: 'ADD',
      payload: expenseData,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: 'UPDATE',
      payload: { id: id, data: expenseData },
    });
  }

  const storeValue = {
    expenses: exponsesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={storeValue}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
