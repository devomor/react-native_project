import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import DetailScreen from './screans/DetailScreen';
import HomeScreen from './screans/HomeScreen';
// const Stack = createStackNavigator();
const Stack =createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
