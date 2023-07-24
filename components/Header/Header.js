import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from './Sidebar';
import Search from './Search';
import Notification from './Notification';

export default function Header() {
  return (
    <View style={styles.header}>
        <View>
            <SideBar/>
        </View>
        <View style={styles.rightHeader}>
            <Search/>
            <Notification/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
    height: 'auto'
  },
  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
});
