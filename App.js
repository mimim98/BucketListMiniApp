import React, { useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import Home from "./components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      <StatusBar style="light"></StatusBar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    padding: 20,
    paddingBottom: 0,
    flex: 1,
    // paddingTop: ,
  },
})
