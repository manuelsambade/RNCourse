import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile.js';

const CategoriesScreen = ({ navigation }) => {
  const onPressCategoryHandler = (item) => {
    navigation.navigate('MealsOverview', {
      categoryId: item.id,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <CategoryGridTile
            title={item.title}
            color={item.color}
            onPress={() => onPressCategoryHandler(item)}
          />
        );
      }}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
