import React from 'react';
import {
    ImageBackground
} from 'react-native';
import DrawerNavigator from './navigation/drawerNavigator';
import { globalStyles } from './styles/global';

export default function App() {
    return (
        <ImageBackground style={globalStyles.main}>
            <DrawerNavigator />
        </ImageBackground>
    );
};