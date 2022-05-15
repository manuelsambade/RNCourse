import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
    const [enteredText, setEnteredText] = useState("");

    const goalInputHandler = (text) => {
        setEnteredText(text);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredText);
        setEnteredText('');
    }

    return (
        <Modal visible={visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredText}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={"#B180F0"} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" onPress={() => onCancel()} color={"#F31282"} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311B6B'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "100%",
        color: "#120438",
        borderRadius: 6,
        marginRight: 8,
        padding: 16,
    },
    btnContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    btn: {
        width: '30%',
        marginHorizontal: 8
    },
})