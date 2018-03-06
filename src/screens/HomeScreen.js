import React, { Component } from 'react';
import styled from 'styled-components';
import AllStudentsQuery from '../queries/AllStudentsQuery';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Student Info',
    }
  };
  render() {
    return (
      <HomeView>
        <AllStudentsQuery navigation={this.props.navigation}/>
      </HomeView>
    );
  }
}

const HomeView = styled.View`
  flex: 1;
`;