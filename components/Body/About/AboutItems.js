import React, { useState } from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
    'pp-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'pp-semiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'pp-light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'pp-medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'pp-regular': require('../../../assets/fonts/Poppins-Regular.ttf')
})

export default function AboutItems({item}) {
    const [font, setFont] = useState(false);

    if(font){
        return (
            <View style={styles.container}>
                <Image source={{uri: `${item.img}`}} style={styles.topImg}/>  
                <View style={styles.aboutItems}>
                    <Text style={styles.aboutType}>{item.type}</Text>
                    <Text style={styles.aboutTytle}>{item.title}</Text>
                    <Text style={styles.aboutTime}>{item.time}</Text>
                </View>              
            </View>
        );
    } else{
        return(
            <AppLoading 
                startAsync={fonts} 
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 2,
        marginTop: 15
    },
    aboutItems: {
        marginLeft: 18,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    topImg: {
        position: 'relative',
        width: 125,
        height: 115,
        borderRadius: 18
    },
    aboutType:{
        fontSize: 11,
        fontFamily: 'pp-semiBold',
        color: '#D9D9D9'
    },
    aboutTytle:{
        fontSize: 14,
        fontFamily: 'pp-semiBold',
        color: '#000',
        width: 250
    },
    aboutTime:{
        fontSize: 11,
        fontFamily: 'pp-semiBold',
        color: '#D9D9D9'
    }
});
