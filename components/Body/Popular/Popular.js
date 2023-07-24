import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PopularTop from './PopularTop'

export default function Popular() {
  return (
    <View style={styles.popular}>
        <PopularTop/>
    </View>
  );
}

const styles = StyleSheet.create({
  popular: {
    marginTop: 27,
    marginLeft: 21,
    marginRight: 21
  }
});
