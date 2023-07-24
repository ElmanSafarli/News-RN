import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function Search() {
  return (
    <View style={styles.search}>
        <Image source={require('../../assets/search.png')} style={{width: 25, height: 25}}/>             
    </View>
  );
}

const styles = StyleSheet.create({
    search: {
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
