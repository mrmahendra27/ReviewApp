import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import CustomButton from '../../components/shared/button';

//Validation
const reviewSchema = yup.object({
    title: yup.string().required().min(6),
    rating: yup.number().required().test('is-num-1-5', 'Rating Should be a number between 1 to 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),
    review: yup.string().required().min(10),
    author: yup.string().required().min(5),
});
//End

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            {/* Starting Formik */}
            <Formik
                initialValues={{
                    title: '',
                    review: '',
                    rating: '',
                    author: '',
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, action) => {
                    action.resetForm();
                    addReview(values)
                }}
            >
                {(props) => (
                    // create a view to bind these input inside a parent
                    <View>
                        {/* Title */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Title"
                            placeholderTextColor='black'
                            value={props.values.title}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                        />
                        {/* Error Message */}
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        {/* Rating  */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating(1-5)"
                            keyboardType="numeric"
                            placeholderTextColor='black'
                            value={props.values.rating}
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                        />
                        {/* Error Message */}
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        {/* Author  */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Author Name(e.g Mahendra)"
                            placeholderTextColor='black'
                            value={props.values.author}
                            onChangeText={props.handleChange('author')}
                            onBlur={props.handleBlur('author')}
                        />
                        {/* Error Message */}
                        <Text style={globalStyles.errorText}>{props.touched.author && props.errors.author}</Text>
                        {/* Review Message */}
                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review"
                            placeholderTextColor='black'
                            value={props.values.review}
                            onChangeText={props.handleChange('review')}
                            onBlur={props.handleBlur('review')}
                        />
                        {/* Error Message */}
                        <Text style={globalStyles.errorText}>{props.touched.review && props.errors.review}</Text>
                        {/* Button */}
                        <CustomButton 
                        name="Submit"
                        onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}