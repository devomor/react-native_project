import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const ActivityinCator = ({size, color}) => {
    return (
          <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});



export default ActivityinCator;
