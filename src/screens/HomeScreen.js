import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import styled from 'styled-components';

import Card from '../components/Card';
import Error from '../components/Error';
import env from '../environment/Environment';

const query = graphql`
  query HomeScreenQuery {
    allStudents {
      _id
      name
      description
    }
  }
`;

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Student Info',
    }
  };
  render() {
    return (
      <QueryRenderer
        environment={ env }
        query={ query }
        render={({error, props}) => {
          if (error) {
            return (<Error message={error.message} />);
          } else if (props) {
            return (
              <HomeView>
                <FlatList
                  data={props.allStudents}
                  keyExtractor={item => item._id.toString()}
                  renderItem={({item}) => <Card studentId={item._id.toString()} studentName={item.name} studentDescription={item.description} navigation={this.props.navigation} />}
                />
              </HomeView>
            );
          } else {
            return (<Error message={'Loading...'} />);
          }
        }}
      />
    );
  }
}

const HomeView = styled.View`
  flex: 1;
`;