/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[{name: 'Lucas Besen', description: 'Web Developer'}, {name: 'Gabriel Martins', description: 'Mobile Developer'}]}
          renderItem={({item}) => <Card studentName={item.name} studentDescription={item.description} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
