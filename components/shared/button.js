import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CustomButton({ name, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonName}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'orange',
    },
    buttonName: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});