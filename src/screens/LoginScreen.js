import React, { Component } from 'react';
import styled from 'styled-components';

import LogoImage from '../assets/img/logo.png';
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
      <Wrapper>
        <Logo />
        <Input placeholder="E-mail" autoCapitalize="none" />
        <Input placeholder="Password" secureTextEntry={true} autoCapitalize="none" />
        <LoginButton navigation={props.navigation} />
      </Wrapper>  
    );
  }
}

const Wrapper = styled.View`
  backgroundColor: #00AB64;
  flex: 1;
  alignItems: center;
  paddingHorizontal: 50;
  justifyContent: center;
`;

const Logo = styled.Image.attrs({
  source: LogoImage,
})`
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