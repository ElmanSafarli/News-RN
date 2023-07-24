import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width - 41;

export default function SliderItem({item}) {
    const [fontLoaded, setFontLoaded] = useState(false);
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
            <View style={styles.container}>
                <View>
                <ImageBackground source={{uri: `${item.img}`}} resizeMode="cover" style={styles.sliderMiddle}>
                    <View style={styles.typeNews}>
                        <Text style={styles.typeNewsT}>{item.type}</Text>
                    </View>
                    <View style={styles.middleBottom}>
                        <Text style={styles.middleBottomP}>{item.time}</Text>
                        <Text style={styles.middleBottomH3}>{item.title}</Text>
                    </View>
                </ImageBackground>
                </View>
                
            </View>
        );
 

}


const styles = StyleSheet.create({
    container: {

    },
    sliderMiddle: {
        height: imageHeight, 
        width: imageWidth ,
        height: 210,
        marginTop: 21,
        marginBottom: 14,
        backgroundColor: "#F6F5F8",
        borderRadius: 18,
        overflow: 'hidden'
      },
      typeNews: {
        width: 70,
        height: 22,
        backgroundColor: "#0785DE",
        borderRadius: 15,
        position: 'absolute',
        left: 20,
        top: 25
      },
      typeNewsT: {
        color: "#fff",
        textAlign: 'center',
        fontFamily: 'pp-medium',
        fontSize: 12
      },
      middleBottom: {
        position: 'absolute',
        bottom: 8,
        left: 20
      },
      middleBottomP: {
        color: "#fff",
        textAlign: 'left',
        fontFamily: 'pp-regular',
        fontSize: 12
      },
      middleBottomH3: {
        color: "#fff",
        textAlign: 'left',
        fontFamily: 'pp-medium',
        fontSize: 16,
        width: '75%'
      }
});
