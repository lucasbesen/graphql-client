import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import StudentScreen from '../screens/StudentScreen';

const screens = {
  Home: {
    screen: HomeScreen
  },
  Student: {
    screen: StudentScreen
  }
}

export default StackNavigator(screens, { initialRouteName: 'Home' });