import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../styles/global';
import Card from '../components/shared/card';

export default function Home({ navigation }) {
    const [viewModal, setViewModal] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Anime recommendation', rating: 5, review: 'This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation, This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation. This is good whsjs swsnjws wsxjwsxnsw sxsjwsx wsxwjxsw wsxsjwsx ss xsxswsx sws xsjxs x s anime recommendation', key: '1' },
        { title: 'Movie recommendation', rating: 4, review: 'This is good movie recommendation', key: '2' },
        { title: 'Series recommendation', rating: 2, review: 'This is good series recommendation', key: '3' },
        { title: 'Cartoon recommendation', rating: 4, review: 'This is good cartoon recommendation', key: '4' },
    ]);


    return (
        <View style={globalStyles.container}>
            {/* Modal */}
            <Modal visible={viewModal} animationType='slide'>
                <View style={styles.modalContent}>
                    {/* Close Modal */}
                    <Icon
                        name="close"
                        size={30}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setViewModal(false)}
                    />
                    {/* Form */}
                </View>
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
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 9,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1
    }
})