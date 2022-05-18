import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const List = ({ data }) => {
  return data.map((elem) => (
    <View key={elem} style={styles.listItem}>
      <Text key={elem} style={styles.itemText}>
        {elem}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
