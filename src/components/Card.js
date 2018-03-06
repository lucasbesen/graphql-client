import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import UserAvatar from '../assets/img/user.png';
import ArrowRight from '../assets/img/arrow_right.png';

const Card = (props) => (
  <Wrapper>
    <CardImage />
    <CardInfo>
      <View>
        <CardName>{props.studentName}</CardName>
        <CardDescription>{props.studentDescription}</CardDescription>
      </View>
      <CardButton onPress={() => props.navigation.navigate('Student', {id: props.studentId})}>
        <ArrowImage />
      </CardButton>
    </CardInfo>
  </Wrapper>
);

export default Card;

const Wrapper = styled.View`
  flex: 1;
  height: 100;
  flexDirection: row;
  backgroundColor: #00AB64;
  alignItems: center;
  marginBottom: 7;
  paddingHorizontal: 10;
`;

const CardImage = styled.Image.attrs({
  source: UserAvatar,
})`
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

const ArrowImage = styled.Image.attrs({
  source: ArrowRight,
})`
  width: 30;
  height: 30;
`;