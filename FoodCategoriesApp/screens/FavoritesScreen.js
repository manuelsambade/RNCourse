import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
      <Text>Favorites</Text>
      <Text>Favorites</Text>
      <Text>Favorites</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
});
