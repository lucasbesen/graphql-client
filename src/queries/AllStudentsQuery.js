import React from 'react';
import { FlatList } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import env from '../environment/Environment';

import Card from '../components/Card';
import Error from '../components/Error';

const query = graphql`
  query AllStudentsQuery {
    allStudents {
      _id
      name
      description
    }
  }
`;

const StudentsQuery = (componentProps) => (
  <QueryRenderer
    environment={ env }
    query={ query }
    render={({error, props}) => {
      if (error) {
        return (<Error message={error.message} />);
      } else if (props) {
        return (
          <FlatList
            data={props.allStudents}
            keyExtractor={item => item._id.toString()}
            renderItem={({item}) => <Card studentId={item._id.toString()} studentName={item.name} studentDescription={item.description} navigation={componentProps.navigation} />}
          />
        );
      } else {
        return (<Error message={'Loading...'} />);
      }
    }}
  />
);

export default StudentsQuery;