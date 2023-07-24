import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AboutItems from './AboutItems';
import { topNews } from '../../../data';

const fonts = () =>
  Font.loadAsync({
    'pp-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'pp-semiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'pp-light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'pp-medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'pp-regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  });

export default function AboutAll() {
  const [font, setFont] = useState(false);
  const [randomList, setRandomList] = useState([]);

  useEffect(() => {
    const shuffledList = shuffleArray(topNews);
    setRandomList(shuffledList);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  if (font) {
    return (
      <View style={styles.container}>
        <FlatList
          data={randomList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <AboutItems item={item} />}
        />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    margin: 21
  },
});
