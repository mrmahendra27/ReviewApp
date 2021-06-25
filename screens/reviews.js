import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import Card from '../components/shared/card';
import { globalStyles, images } from '../styles/global';

export default function Review({ navigation, route }) {
    const { item } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <Text style={globalStyles.review}>{item.review}</Text>
                <Text style={globalStyles.author}>~{item.author}</Text>
                <View style={globalStyles.rating}>
                    <Text>Rating: </Text>
                    <Image source={images.ratings[item.rating]} />
                </View>
            </Card>
        </View>
    );
}