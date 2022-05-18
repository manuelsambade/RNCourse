import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const IconButton = ({ iconName, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={iconName} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
