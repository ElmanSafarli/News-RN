import React, { useEffect, useState } from 'react';


import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import SliderContent from "./SliderContent"

import { useNavigation } from '@react-navigation/native';


export default function Slider() {
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
      loadFonts();
    }, []);

    const loadFonts = async () => {
      await Font.loadAsync({
        'pp-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
        'pp-semiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
        'pp-light': require('../../../assets/fonts/Poppins-Light.ttf'),
        'pp-medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
        'pp-regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
      });
      setFontLoaded(true);
      await SplashScreen.hideAsync();
    };
    if (!fontLoaded) {
      return null; // Render a loading indicator or splash screen here
    }

        return (
            <View style={styles.slider}>
                <View style={styles.sliderTop}>
                    <View>
                        <Text  style={styles.h1}>Son Xəbərlər</Text >
                    </View>
                    <View>
                        <Pressable style={styles.btn} onPress={() => navigation.navigate('Butun Xəbərlər')}>
                            <Text style={styles.link}>Hamısı</Text>
                        </Pressable>
                    </View>
                </View>
                <SliderContent/>
            </View>
        );


}

const styles = StyleSheet.create({
  slider: {
    paddingTop: 20,
    backgroundColor: "#fff",
    height: "auto",
    paddingRight: 21,
    paddingLeft: 21
  },
  sliderTop: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  h1: {
    fontSize: 20,
    fontFamily: 'pp-semiBold'
  },
  link: {
    fontSize: 14,
    color: '#0785DE',
    fontFamily: 'pp-regular'
  },
  btn: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center'
  }
});
