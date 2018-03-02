import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import StudentScreen from '../screens/StudentScreen';
import LoginScreen from '../screens/LoginScreen';

const screens = {
  Home: {
    screen: HomeScreen
  },
  Student: {
    screen: StudentScreen
  },
  Login: {
    screen: LoginScreen
  }
}

export default StackNavigator(screens, { initialRouteName: 'Login' });