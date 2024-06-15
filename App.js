import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import Card from './components/Container'
export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
      <Card />
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
