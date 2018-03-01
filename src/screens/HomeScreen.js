import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import Card from '../components/Card';
import styled from 'styled-components';

export default class HomeScreen extends Component {
  render() {
    const props = this.props;
    return (
      <HomeView>
        <FlatList 
          data={[{name: 'Lucas Besen', description: 'Web Developer'}, {name: 'Gabriel Martins', description: 'Mobile Developer'}]}
          renderItem={({item}) => <Card studentName={item.name} studentDescription={item.description} navigation={props.navigation} />}
        />
      </HomeView>
    );
  }
}

const HomeView = styled.View`
  flex: 1;
  paddingTop: 20;
  backgroundColor: #F5FCFF;
`;