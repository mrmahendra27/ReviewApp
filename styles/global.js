import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'Roboto-Light',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    review: {
        fontFamily: 'Roboto-Light',
        fontSize: 15,
        marginVertical: 15,
        textAlign: 'center',
        lineHeight: 20,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 18,
        paddingTop: 18,
        borderTopWidth: 2,
        borderTopColor: '#eee'
    },
    author: {
        textAlign: 'right',
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 15,
        padding: 10,
        color: 'black',
        borderRadius: 15
    },
    errorText: {
        color: 'crimson',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
        fontWeight: 'bold'
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
};