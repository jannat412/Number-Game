import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () =>{
      setEnteredValue('');
      setConfirmed(false);
    };

    const confirmInputHandler = (title, message) =>{
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 ||chosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                           blurOnSubmit
                           autoCapitalize='none'
                           autoCorrect={false}
                           keyboardType="number-pad"
                           maxLength={2}
                           onChangeText={numberInputHandler}
                           value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                        <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

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
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    button: {
        width: 100
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;