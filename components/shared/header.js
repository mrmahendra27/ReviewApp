import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <Icon name="menu" size={30} style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../../assets/heart_logo.png')} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        left: 10,
        position: 'absolute',
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: 'Roboto-Light',
        fontWeight: 'bold',
        color: 'brown',
        fontSize: 20,
        letterSpacing: 1,
    },
    headerImage: {
        height: 30,
        width: 30,
        marginHorizontal: 10
    }
});