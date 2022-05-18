import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import MealDetails from './MealDetails';

const MealItem = ({ item }) => {
  const navigation = useNavigation();

  const onPressMealItem = () => {
    navigation.navigate('MealDetail', { mealId: item.id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#cccccc' }} //for android
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)} //for ios
        onPress={onPressMealItem}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </View>
        <MealDetails
          duration={item.duration}
          affordability={item.affordability}
          complexity={item.complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fffffF',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
