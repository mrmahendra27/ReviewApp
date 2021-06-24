import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Home from './screens/home';
import About from './screens/about';
import Review from './screens/reviews';

export default function App() {
    return (
        <View style={styles.main}>
            <Home />
            <About />
            <Review />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    }
});