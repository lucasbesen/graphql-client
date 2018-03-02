import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components';

export default class LoginButton extends Component {
  render() {
    const props = this.props;
    return(
        <ButtonWrapper onPress={() => props.navigation.navigate('Home')}>
          <ButtonText>Sign In</ButtonText>
        </ButtonWrapper>
    );
  }
}

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