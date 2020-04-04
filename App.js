import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Event from './components/Event';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title ="fantasy"/>
      <Event/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1
  }
});
