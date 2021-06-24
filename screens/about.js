import React from 'react';
import { View, Text } from 'react-native';
import Card from '../components/shared/card';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>About Screen</Text>
            </Card>
        </View>
    );
}