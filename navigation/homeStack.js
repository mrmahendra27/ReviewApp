import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Review from "../screens/reviews";

const Stack = createStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: 'lightgrey',
            },
            headerTitleStyle: {
                fontFamily: 'Roboto-Light',
                fontSize: 20,
                fontFamily: 'bold'
            },
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
    )
}

export default Navigator;