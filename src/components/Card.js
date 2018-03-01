import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import styled from 'styled-components';

export default class Card extends Component {
  render() {
    return( 
      <CardWrapper>
        <CardImage source={require('../../img/user.png')} />
        <CardInfo>
          <View>
            <CardName>{this.props.studentName}</CardName>
            <CardDescription>{this.props.studentDescription}</CardDescription>
          </View>
          <CardButton onPress={() => this.props.navigation.navigate('Student')}>
            <ArrowImage source={require('../../img/arrow_right.png')} />
          </CardButton>
        </CardInfo>
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.View`
  flex: 1;
  height: 100;
  flexDirection: row;
  backgroundColor: #00AB64;
  alignItems: center;
  paddingHorizontal: 10;
  borderTopWidth: 1;
`;

const CardImage = styled.Image`
  height: 50;
  width: 50;
`;

const CardInfo = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: space-between;
  marginLeft: 10;
  paddingLeft: 10;
  borderLeftWidth: 1;
`;

const CardName = styled.Text`
  fontWeight: bold;
  fontSize: 16;
  color: #FFFFFF;
`;

const CardDescription = styled.Text`
  color: #FFFFFF;
`;

const CardButton = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
`;

const ArrowImage = styled.Image`
  width: 30;
  height: 30;
`;