import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';
import Body from './components/Body/Body';
import Header from './components/Header/Header'
import Footer from './components/Body/Footer/Footer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={styles.container}>
        {/* <Header/> */}
        <Body/>
        <Footer/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});
