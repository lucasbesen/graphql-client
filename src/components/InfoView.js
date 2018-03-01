import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styled from 'styled-components';

export default class InfoView extends Component {
  render() {
    const props = this.props;
    return(
      <Wrapper>
          <StudentHeader>
            <StudentImage source={require('../../img/user.png')} />
            <StudentName>{props.studentName}</StudentName>
          </StudentHeader>
          <StudentInfo>
            <InfoSection>
              <Title>Name</Title>
              <Info>{props.studentName}</Info>
            </InfoSection>
            <InfoSection>
              <Title>Description</Title>
              <Info>{props.studentDescription}</Info>
            </InfoSection>
          </StudentInfo>
        </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
`;

const StudentHeader = styled.View`
  flex: 1;
  backgroundColor: #00AB64;
  alignItems: center;
  justifyContent: center;
`;

const Title = styled.Text`
  paddingTop: 15;
  fontWeight: bold;
`;

const InfoSection = styled.View`
  borderBottomWidth: 1;
  borderColor: #B4C0C8;
`;

const Info = styled.Text`
  color: #B4C0C8;
  paddingVertical: 10;
`;

const StudentName = styled.Text`
  fontWeight: bold;
  fontSize: 18;
  color: #FFFFFF;
  paddingTop: 5;
`;

const StudentInfo = styled.View`
  flex: 2;
  paddingHorizontal: 15px;
  backgroundColor: #FFFFFF;
`;

const StudentImage = styled.Image`
  height: 80;
  width: 80;
  borderWidth: 2;
  borderRadius: 40;
`;