import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import React, { useLayoutEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import { FavoritesContext } from '../store/FavoritesContext';

const MealDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const favoritesCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isFavorite = favoritesCtx.ids.includes(mealId);

  const handleHeaderBtnPress = () => {
    if (isFavorite) {
      favoritesCtx.removeFavorite(mealId);
    } else {
      favoritesCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            iconName={isFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={handleHeaderBtnPress}
          />
        );
      },
    });
  }, [navigation, handleHeaderBtnPress]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
