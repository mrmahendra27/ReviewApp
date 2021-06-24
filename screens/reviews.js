import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Review({ navigation, route }) {
    const {item} = route.params;
    return  (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{item.title}({item.rating} rating)</Text>
            <Text style={globalStyles.titleText}>{item.message}</Text>
            <Button 
            title="back"
            onPress={() => navigation.goBack()}
            />
        </View>
    );
}