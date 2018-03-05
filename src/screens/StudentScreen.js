import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import styled from 'styled-components';

import InfoComponent from '../components/InfoComponent';
import Error from '../components/Error';
import env from '../environment/Environment';

export default class StudentScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Student Info',
    }
  };
  render() {
    const params = this.props.navigation.state.params;

    const query = graphql`
      query StudentScreenQuery($studentId: String!) {
        getStudent(_id: $studentId) {
          _id
          name
          description
        }
      }
    `;

    return (
      <QueryRenderer
        environment={ env }
        query={ query }
        variables={{ studentId: params.id }}
        render={({error, props}) => {
          if (error) {
            return (<Error>{error.message}</Error>);
          } else if (props) {
            return (
              <StudentView>
                <InfoComponent studentName={props.getStudent.name} studentDescription={props.getStudent.description} />
              </StudentView>
            );
          } else {
            return (<Error>{'Loading...'}</Error>);
          }
        }}
      />
    );
  }
}

const StudentView = styled.View`
  flex: 1;
`;