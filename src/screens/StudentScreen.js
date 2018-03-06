import React, { Component } from 'react';
import styled from 'styled-components';

import GetStudentQuery from '../queries/GetStudentQuery';

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
        <GetStudentQuery params={params} />
      </StudentView>
    );
  }
}

const StudentView = styled.View`
  flex: 1;
`;