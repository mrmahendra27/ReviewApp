import React from 'react';
import {
    View,
} from 'react-native';
import DrawerNavigator from './navigation/drawerNavigator';
import { globalStyles } from './styles/global';

export default function App() {
    return (
        <View style={globalStyles.main}>
            <DrawerNavigator />
        </View>
    );
};