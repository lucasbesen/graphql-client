import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styled from 'styled-components';
import InfoView from '../components/InfoView';

export default class StudentScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Student Info',
    }
  };
  render() {
    const params = this.props.navigation.state.params;
    return (
      <StudentView>
        <InfoView studentName={params.name} studentDescription={params.description} />
      </StudentView>
    );
  }
}

const StudentView = styled.View`
  flex: 1;
`;