import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../components/shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Anime recommendation', rating: 5, message: 'This is good anime recommendation', key: '1' },
        { title: 'Movie recommendation', rating: 4, message: 'This is good movie recommendation', key: '2' },
        { title: 'Series recommendation', rating: 2, message: 'This is good series recommendation', key: '3' },
        { title: 'Cartoon recommendation', rating: 4, message: 'This is good cartoon recommendation', key: '4' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', {
                        item: item,
                    })}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}