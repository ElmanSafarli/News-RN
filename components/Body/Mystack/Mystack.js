import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text } from 'react-native';

import HomePage from '../Home/HomePage'
import AboutAll from '../About/AboutAll';
import WorlNews from '../World/WorldNews';
import Technology from "../Technology/Technology"

const Stack = createNativeStackNavigator();

export function MyStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Son Xəbərlər"
            component={HomePage}
          />
          <Stack.Screen name="Butun Xəbərlər" component={AboutAll}  />
          <Stack.Screen name="Dunyada baş verənlər" component={WorlNews}  />
          <Stack.Screen name="Technology News" component={Technology}  />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
  
});
