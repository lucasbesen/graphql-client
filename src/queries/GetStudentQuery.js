import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import InfoComponent from '../components/InfoComponent';
import Error from '../components/Error';
import env from '../environment/Environment';

const query = graphql`
  query GetStudentQuery($studentId: String!) {
    getStudent(_id: $studentId) {
      _id
      name
      description
    }
  }
`;

const GetStudentQuery = (props) => (
  <QueryRenderer
    environment={ env }
    query={ query }
    variables={{ studentId: props.params.id }}
    render={({error, props}) => {
      if (error) {
        return (<Error>{error.message}</Error>);
      } else if (props) {
        return (
          <InfoComponent studentName={props.getStudent.name} studentDescription={props.getStudent.description} />
        );
      } else {
        return (<Error>{'Loading...'}</Error>);
      }
    }}
  />
);

export default GetStudentQuery;