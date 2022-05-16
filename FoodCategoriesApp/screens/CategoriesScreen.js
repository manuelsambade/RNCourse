import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile.js';

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <CategoryGridTile title={item.title} color={item.color} />;
      }}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
