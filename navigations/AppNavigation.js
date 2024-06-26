import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailScreen from '../screans/DetailScreen';
import HomeScreen from '../screans/HomeScreen';
import ProfileScreen from '../screans/ProfileScreen';
const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
       </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigation;

