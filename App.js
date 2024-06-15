import React, { Component } from 'react';
import { StyleSheet, View,Alert } from 'react-native';
import Indicator from './components/ActivityinCator';
import ButtonComponent from './components/ButtonComponet';
import Card from './components/Container';
export default class App extends Component {
  render() {
      const onPressLearnMore = () => {
        Alert.alert('Button pressed!', 'You pressed the Learn More button.');
        };
    return (
      <View style={[styles.container, styles.horizontal]}>
      <Card />
      <Indicator />
        <ButtonComponent
        onPressLearnMore={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

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
