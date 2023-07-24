import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { StyleSheet, Text, View, FlatList, Image  } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//https://api.worldnewsapi.com/search-news?api-key=4790de9dd9db4e679397d201a733bd4a&text=tesla

//27f52968e78b476b8077ca887c0b0127

//7ea45f35e4f9db2efe0d4487d19d7830


export default function WorldNews() {
    const [fontLoaded, setFontLoaded] = useState(false);
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      fetchNews();
      loadFonts();
    }, []);
  
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'http://api.mediastack.com/v1/news?access_key=7ea45f35e4f9db2efe0d4487d19d7830&categories=technology&language=en'
        );
        const data = await response.json();
        setNewsData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
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
  
    const renderArticle = ({ item }) => (
      <View style={styles.worldNews}>
        <View style={styles.worldNewsTop}>
          <View style={styles.worldNewsTopL}>
            <Text style={styles.worldNewsSource}>{item.source}</Text>
            <Text style={styles.worldNewsTitle}>{item.title}</Text>
          </View>
          <View>
            {item.image ? (
              <Image source={{ uri: item.image }} style={styles.worldImg} />
            ) : (
              <Image source={require('../../../assets/tech.png')} style={styles.worldImg} />
            )}
          </View>
        </View>
        <Text style={styles.worldNewsDescription}>{item.description}</Text>
        <View style={styles.hr}>
          <View style={styles.hrLine}></View>
        </View>
      </View>
    );
  

    return (
      <View>
        <FlatList
          data={newsData}
          renderItem={renderArticle}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  

  
  
const styles = StyleSheet.create({
  worldNews: {
    margin: 21,
    height: 'auto'
  },
  worldNewsTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  worldNewsTopL: {
    width: '68%'
  },
  worldImg: {
    width: 100,
    height: 100,
    borderRadius: 18
  },
  worldNewsSource: {
    fontSize: 11,
    fontFamily: 'pp-medium',
    color: '#D0D0D0'
  },
  worldNewsTitle: {
    fontSize: 14,
    fontFamily: 'pp-semiBold',
    color: '#000'
  },
  worldNewsDescription: {
    fontSize: 12,
    fontFamily: 'pp-medium',
    color: '#000',
    marginTop: 20
  },
  hr: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  hrLine: {
    width: '65%',
    height: 1,
    backgroundColor: '#000',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  }
});
