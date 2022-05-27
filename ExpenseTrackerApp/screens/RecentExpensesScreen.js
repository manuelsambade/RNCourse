import { StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import ExpenseClient from '../api-client/ExpenseClient';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

const RecentExpensesScreen = () => {
  const expensesCtx = useContext(ExpensesContext);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    ExpenseClient.getAllExpenses()
      .then((data) => {
        expensesCtx.setExpenses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  if (error) {
    return (
      <ErrorOverlay
        message={error}
        onConfirm={() => {
          setError(undefined);
          setIsLoading(false);
        }}
      />
    );
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

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
