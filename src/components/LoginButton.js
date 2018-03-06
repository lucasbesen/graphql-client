import React, { Component } from 'react';
import styled from 'styled-components';

const LoginButton = (props) => (   
  <ButtonWrapper onPress={() => props.navigation.navigate('Home')}>
    <ButtonText>Sign In</ButtonText>
  </ButtonWrapper>
);

export default LoginButton;

const ButtonWrapper = styled.TouchableOpacity`
  alignSelf: stretch;
  height: 50;
  borderRadius: 25;
  backgroundColor: #004528;
  justifyContent: center;
  alignItems: center;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
`;