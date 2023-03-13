import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Navigation from './src/navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#7460aa',
  },
});

export default App;
