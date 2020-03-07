import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput style={styles.input} />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    button: {
        width: '80%'
    }
});

export default StartGameScreen;