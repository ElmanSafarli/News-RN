import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import axios from 'axios';

export default function WorldNews() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
    loadFonts();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'http://api.mediastack.com/v1/news?access_key=7ea45f35e4f9db2efe0d4487d19d7830&keywords=tennis&countries=us,gb,de'
      );
      setNewsData(response.data.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch news');
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
            <Image
              source={require('../../../assets/worldNews.png')}
              style={styles.worldImg}
            />
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
      {error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={newsData}
          renderItem={renderArticle}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  worldNews: {
    margin: 21,
    height: 'auto',
  },
  worldNewsTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  worldNewsTopL: {
    width: '68%',
  },
  worldImg: {
    width: 100,
    height: 100,
    borderRadius: 18,
  },
  worldNewsSource: {
    fontSize: 11,
    fontFamily: 'pp-medium',
    color: '#D0D0D0',
  },
  worldNewsTitle: {
    fontSize: 14,
    fontFamily: 'pp-medium',
    color: '#1D1D1D',
  },
  worldNewsDescription: {
    fontSize: 10,
    fontFamily: 'pp-light',
    color: '#000',
    marginTop: 7,
    marginBottom: 7,
  },
  hr: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginTop: 5,
    marginBottom: 5,
  },
  hrLine: {
    height: 1,
    backgroundColor: '#E8E8E8',
    width: '60%',
  },
});
