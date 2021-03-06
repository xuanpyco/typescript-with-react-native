/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React from 'react';
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Hello from './Hello';

const instructions = Platform.select({
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
});

export default class App extends Component<any> {
  public render() {
    return (
      <View style={styles.container}>
        <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Hello  name="Nguyen" enthusiasmLevel={9}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});
