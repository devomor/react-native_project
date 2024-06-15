import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const ActivityinCator = () => {
    return (
        <View>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}

export default ActivityinCator;
