import { StyleSheet } from 'react-native';
import React, { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import ExpenseClient from '../api-client/ExpenseClient';

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    ExpenseClient.getAllExpenses()
      .then((data) => expensesCtx.setExpenses(data))
      .catch((error) => console.log(error));
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      periodName={'Last 7 days'}
      expenses={recentExpenses}
      fallbackText={'No recent expenses.'}
    />
  );
};

export default RecentExpensesScreen;

const styles = StyleSheet.create({});
