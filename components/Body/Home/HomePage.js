import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '../Slider/Slider';
import Popular from '../Popular/Popular';

export default function HomePage() {
  return (
    <View style={styles.HomePage}>
        <Slider/>
        <Popular/>
    </View>
  );
}

const styles = StyleSheet.create({
    
});
