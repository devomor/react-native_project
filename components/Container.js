import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Container = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>hello i am programer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        color:"blue",
        height:200,
        width:200,
        backgroundColor:"blue",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderBlockColor:'red'
     
    },
    textStyle:{
        fontSize:30,
        color:"white",
        alignItems:'center'
    }
})
 

export default Container;
