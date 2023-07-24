import React, { useState, useEffect, useRef } from 'react';

import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { newsSlide } from '../../../data';

import SliderItem from "./SliderItem";
import Pagination from './Pagination';

const fonts = () => Font.loadAsync({
    'pp-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'pp-semiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'pp-light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'pp-medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'pp-regular': require('../../../assets/fonts/Poppins-Regular.ttf')
})

export default function SliderContent() {
    const [font, setFont] = useState(false);
    // const [index, setIndex] = useState(0);
    // const scrollX = useRef(new Animated.Value(0)).current;

    // const handleOnScroll = event => {
    //   Animated.event(
    //     [
    //       {
    //         nativeEvent: {
    //           contentOffset: {
    //             x: scrollX,
    //           },
    //         },
    //       },
    //     ],
    //     {
    //       useNativeDriver: false,
    //     },
    //   )(event);
    // };
  
    // const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    //   // console.log('viewableItems', viewableItems);
    //   setIndex(viewableItems[0].index);
    // }).current;
  
    // const viewabilityConfig = useRef({
    //   itemVisiblePercentThreshold: 50,
    // }).current;

    if(font){
        return (   
            <View >
                <FlatList 
                    data={newsSlide}
                    renderItem={({item}) => <SliderItem item={item} />}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    // onScroll={handleOnScroll}
                    // onViewableItemsChanged={handleOnViewableItemsChanged}
                    // viewabilityConfig={viewabilityConfig}
                />
                {/* <Pagination data={newsSlide} scrollX={scrollX} index={index}/> */}
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

});
