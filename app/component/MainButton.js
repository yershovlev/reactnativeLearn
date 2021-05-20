import React from 'react';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function MainButton({ title, color = "primary", onPress }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor : colors[color],}]}
                          onPress={onPress}>
            <Text style={styles.buttonLable}> {title} </Text>
        </TouchableOpacity>
    );
}

export default MainButton;

const styles = StyleSheet.create({
    button: {
        borderRadius : 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 15,
        width : '100%',
        marginVertical: 10,
    },

    buttonLable: {
        color : colors.white,
        fontSize : 18,
        textTransform : 'uppercase',
        fontWeight: 'bold',
    }
})