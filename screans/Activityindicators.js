import React from 'react';
import { StyleSheet, View } from 'react-native';
import ActivityinCator from '../components/ActivityinCator';

const Activityindicators = () => {
    return (
        <View style={styles.container}>
            <ActivityinCator size='small' color='red' />
            <ActivityinCator size='large' color='green' />
            <ActivityinCator size='large' color='gray' />
        </View>
    );
}
const styles =StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Activityindicators;
