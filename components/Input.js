import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
};

const styles = StyleSheet.create({
    input: {
        height: 35,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 5,
        marginTop: 10
    }
});
export default Input;