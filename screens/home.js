import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Button, Keyboard, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../styles/global';
import Card from '../components/shared/card';
import ReviewForm from './forms/review';

export default function Home({ navigation }) {
    const [viewModal, setViewModal] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Anime recommendation', rating: 5, review: 'This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation, This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation. This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation', author: 'anonymous', key: '1' },
        { title: 'Movie recommendation', rating: 4, review: 'This is good movie recommendation', author: 'anonymous', key: '2' },
        { title: 'Series recommendation', rating: 2, review: 'This is good series recommendation', author: 'anonymous', key: '3' },
        { title: 'Cartoon recommendation', rating: 4, review: 'This is good cartoon recommendation', author: 'anonymous', key: '4' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            return [review, ...prevReviews];
        });
        setViewModal(false);
    };

    return (
        <View style={globalStyles.container}>
            {/* Modal */}
            <Modal visible={viewModal} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        {/* Close Modal */}
                        <Icon
                            name="close"
                            size={30}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setViewModal(false)}
                        />
                        {/* Form */}
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {/* Open Modal */}
            <Icon
                name="add"
                size={30}
                style={styles.modalToggle}
                onPress={() => setViewModal(true)}
            />
            {/*Lists*/}
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

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: 'black',
        padding: 9,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 10,
    },
    modalContent: {
        flex: 1,
        margin: 10,
    }
})