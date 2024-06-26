import React from 'react';
import { Button, View, ScrollView } from 'react-native';
import Spacer from '../components/Spacer';

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
         <Button 
            onPress={()=>navigation.navigate('Details')}
            title='go button'
            color='#841584'
         />
         <Spacer height={20} />
           <Button 
            onPress={()=>navigation.navigate('ActivityIndicator')}
            title='ActivityIndicator Screen'
            color='#841584'
         />
        </ScrollView>
    );
}


export default HomeScreen;

