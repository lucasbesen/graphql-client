import React, { Component } from 'react';
import styled from 'styled-components';

const Error = (props) => (
  <Wrapper>
    <ErrorText>{props.message}</ErrorText>
  </Wrapper>
);

export default Error;

const Wrapper = styled.View`
  flex: 1;
  backgroundColor: #FFFFFF
`;

const ErrorText = styled.Text``;