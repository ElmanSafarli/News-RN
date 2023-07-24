import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { useNavigation } from '@react-navigation/native';

import PopularNews from './PopularNews'

const fonts = () => Font.loadAsync({
    'pp-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'pp-semiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'pp-light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'pp-medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'pp-regular': require('../../../assets/fonts/Poppins-Regular.ttf')
})


export default function Popular() {
    const [font, setFont] = useState(false);
    const navigation = useNavigation();
    if(font){
        return (
            <View>
                <View style={styles.popularTop}>
                    <View>
                        <Text style={styles.h1}>Maraqlı Xəbərlər</Text>
                    </View>
                    <View>
                        <Pressable style={styles.btn} onPress={() => navigation.navigate('Butun Xəbərlər')}>
                            <Text style={styles.link}>Hamısı</Text>
                        </Pressable>
                    </View>
                </View>
                
                <PopularNews/>
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
  popularTop: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  btn: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center'
  },
  link: {
    fontSize: 14,
    color: '#0785DE',
    fontFamily: 'pp-regular'
  },
  h1: {
    fontSize: 20,
    fontFamily: 'pp-semiBold'
  }
});
