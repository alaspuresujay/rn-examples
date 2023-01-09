import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './Style.Testscreen';

function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TestScreen</Text>
      {/* <Pressable style={styles.button} onPress={console.log}>
        <Text style={styles.buttonText}>Click Here</Text>
      </Pressable> */}
    </View>
  );
}

export default TestScreen;
