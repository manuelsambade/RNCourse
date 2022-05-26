import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const renderExpense = (item) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => renderExpense(item)}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
