import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

const AllExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      periodName={'Total'}
      expenses={expensesCtx.expenses}
      fallbackText={'No expenses.'}
    />
  );
};

export default AllExpensesScreen;

const styles = StyleSheet.create({});
