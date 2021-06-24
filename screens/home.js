import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../components/shared/card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Anime recommendation', rating: 5, review: 'This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation, This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation. This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation', key: '1' },
        { title: 'Movie recommendation', rating: 4, review: 'This is good movie recommendation', key: '2' },
        { title: 'Series recommendation', rating: 2, review: 'This is good series recommendation', key: '3' },
        { title: 'Cartoon recommendation', rating: 4, review: 'This is good cartoon recommendation', key: '4' },
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