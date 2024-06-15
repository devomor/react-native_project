import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Indicator from './components/ActivityinCator';
import Card from './components/Container';
export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
      <Card />
      <Indicator />
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
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,
  },
});
