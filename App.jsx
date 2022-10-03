/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Dropdown from './src/dropdown';

const { height, width } = Dimensions.get('window');

const rawData = [
  { id: 1, value: 'Hindi' },
  { id: 2, value: 'English' },
  { id: 3, value: 'Bengali' },
  { id: 4, value: 'Marathi' },
  { id: 5, value: 'Telugu' },
  { id: 6, value: 'Tamil' },
  { id: 7, value: 'Gujarati' },
  { id: 8, value: 'Urdu' },
  { id: 9, value: 'Kannada' },
];

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Dropdown
          label="Dropdown"
          placeholder="Select or Enter"
          onChangeText={(text) => console.log(text)}
          options={rawData}
          value={rawData[0].value}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
export default App;
