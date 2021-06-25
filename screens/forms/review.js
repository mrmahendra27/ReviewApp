import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Form, Formik } from 'formik';

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    review: '',
                    rating: '',
                }}
                onSubmit={(values, action) => {
                    action.resetForm();
                    addReview(values)
                }}
            >
                {(props) => (
                    // create a view to bind these input inside a parent
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter Title"
                            placeholderTextColor='black'
                            value={props.values.title}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter Review"
                            placeholderTextColor='black'
                            value={props.values.review}
                            onChangeText={props.handleChange('review')}
                            onBlur={props.handleBlur('review')}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Enter Rating(1-5)"
                            keyboardType="numeric"
                            placeholderTextColor='black'
                            value={props.values.rating}
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                        />

                        <Button
                        color="maroon"

                        title="Submit Review"
                        onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}