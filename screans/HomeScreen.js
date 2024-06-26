import React from 'react';
import { Button, Text, View } from 'react-native';
import DetailScreen from './DetailScreen';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>hello</Text>

         <Button 
            onPress={()=>navigation.navigate('Details')}
            title='go button'
            color='#841584'
            accessibilityLabel="Learn more about this purple button"
         />
        </View>
    );
}

export default HomeScreen;

