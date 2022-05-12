import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const GoalItem = ({ id, text, onDeleteItem }) => {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={() => onDeleteItem(id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#5e0acc",
        margin: 10,
        borderRadius: 8,
    },
    goalText: {
        color: "#fff",
        padding: 8
    },
    pressedItem: {
        opacity: 0.5
    }
})