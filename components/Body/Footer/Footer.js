import React, { useState } from 'react';

import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { useNavigation } from '@react-navigation/native';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { faHandcuffs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Add the desired icons to the library
library.add(faHouse);
library.add(faEarth);
library.add(faComputer);
library.add(faHandcuffs);

const fonts = () => Font.loadAsync({
    'pp-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'pp-semiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'pp-light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'pp-medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'pp-regular': require('../../../assets/fonts/Poppins-Regular.ttf')
})


export default function Footer() {
    const [font, setFont] = useState(false);
    const navigation = useNavigation();
    if(font){
        return (
            <View style={styles.footer}>
                <View style={styles.footerNavigate}>
                    <Pressable style={styles.footerNavigateBtn} onPress={() => navigation.navigate('Son Xəbərlər')}>
                        <FontAwesomeIcon icon="house" size={20} color="#fff" />
                        <Text style={styles.footerT}>Son</Text>
                    </Pressable>
                </View>
                <View style={styles.footerNavigate}>
                    <Pressable style={styles.footerNavigateBtn} onPress={() => navigation.navigate('Dunyada baş verənlər')}>
                        <FontAwesomeIcon icon="earth" size={20} color="#fff" />
                        <Text style={styles.footerT}>Xarici</Text>
                    </Pressable>
                </View>
                <View style={styles.footerNavigate}>
                    <Pressable style={styles.footerNavigateBtn} onPress={() => navigation.navigate('Technology News')}>
                        <FontAwesomeIcon icon="computer" size={20} color="#fff" />
                        <Text style={styles.footerT}>Texnologiya</Text>
                    </Pressable>
                </View>
                <View style={styles.footerNavigate}>
                    <Pressable style={styles.footerNavigateBtn} onPress={() => navigation.navigate('Son Xəbərlər')}>
                        <FontAwesomeIcon icon="handcuffs" size={20} color="#fff" />
                        <Text style={styles.footerT}>Kriminal</Text>
                    </Pressable>
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
    footer: {
        position: 'relative',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 21,
        marginRight: 21,
        height: 85
    },
    footerNavigate: {
        backgroundColor: '#0785DE',
        width: 'auto',
        height: 35,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 12,
        paddingRight: 12
    },
    footerNavigateBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerT: {
        fontFamily: 'pp-semiBold',
        fontSize: 11,
        color: '#fff',
        paddingLeft: 4 
    }
});
