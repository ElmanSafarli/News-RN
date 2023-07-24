import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function Notification() {
  return (
    <View style={styles.notification}>
        <Image source={require('../../assets/bell.png')} style={{width: 25, height: 25}}/>             
    </View>
  );
}

const styles = StyleSheet.create({
    notification: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#F6F5F8",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 21,
        marginTop: 21
    }
});
