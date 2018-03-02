import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput
} from 'react-native';
import styled from 'styled-components';

import LoginButton from '../components/LoginButton';

export default class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Login',
    }
  };
  render() {
    const props = this.props;
    return(
      <LoginView>
        <Wrapper>
          <Logo source={require('../../img/logo.png')}/>
          <Input placeholder="E-mail" autoCapitalize="none" />
          <Input placeholder="Password" secureTextEntry={true} autoCapitalize="none" />
          <LoginButton navigation={props.navigation} />
        </Wrapper>
      </LoginView>
    );
  }
}

const LoginView = styled.View`
  flex: 1;
  backgroundColor: #00AB64;
`;

const Wrapper = styled.View`
  flex: 1;
  alignItems: center;
  marginHorizontal: 50;
  justifyContent: center;
`;

const Logo = styled.Image`
  height: 100;
  width: 100;
`;

const Input = styled.TextInput`  
  alignSelf: stretch;
  height: 50;
  borderRadius: 25;
  backgroundColor: #FFFFFF;
  textAlign: center;
  marginVertical: 10;
`;