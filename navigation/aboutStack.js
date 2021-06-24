import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'lightgrey',
            },
            headerTitleStyle: {
                fontFamily: 'Roboto-Light',
                fontSize: 20,
                fontFamily: 'bold'
            },
        }}>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default AboutStack;