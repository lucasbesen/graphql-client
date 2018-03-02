import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styled from 'styled-components';
import InfoComponent from '../components/InfoComponent';

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
        <InfoComponent studentName={params.name} studentDescription={params.description} />
      </StudentView>
    );
  }
}

const StudentView = styled.View`
  flex: 1;
`;