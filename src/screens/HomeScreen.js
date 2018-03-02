import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import Card from '../components/Card';
import styled from 'styled-components';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
    }
  };
  render() {
    const props = this.props;
    return (
      <HomeView>
        <FlatList
          data={[{id: 1, name: 'Lucas Besen', description: 'Web Developer'}, {id: 2, name: 'Gabriel Martins', description: 'Mobile Developer'}]}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Card studentName={item.name} studentDescription={item.description} navigation={props.navigation} />}
        />
      </HomeView>
    );
  }
}

const HomeView = styled.View`
  flex: 1;
`;