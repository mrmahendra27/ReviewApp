import React from 'react';
import { View, Text, Button } from 'react-native';
import Card from '../components/shared/card';
import { globalStyles } from '../styles/global';

export default function Review({ navigation, route }) {
    const { item } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.message}</Text>
                <Text>{item.rating}</Text>
            </Card>
        </View>
    );
}