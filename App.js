import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator } from 'react-native';
export default class App extends Component {
  render() {
    return (
      //card style add
      <View style={styles.card}>
        <Text style={{color:'blue',fontSize:30 }}>hellow aima progormar my name omar</Text>
        <Text>omor faruk hellow proggramer</Text>
          <ActivityIndicator size="large" color="#00ff00" />
          
      </View>
      
    );
  }
}
  const styles = StyleSheet.create({
    card: {
    width: 500,
    borderRadius: 16,
    marginVertical: 6,
    backgroundColor:'red',
    alignItems:"center",

  },
    horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  });