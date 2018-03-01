import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';

export default class Card extends Component {
  render() {
    return( 
      <View style={styles.card}>
        <Image 
          style={styles.userAvatar}
          source={require('../../img/user.png')}
        />
        <View style={styles.info}>
          <View>
            <Text style={[styles.textWhite, styles.studentName]}>{this.props.studentName}</Text>
            <Text style={styles.textWhite}>{this.props.studentDescription}</Text>
          </View>
          <TouchableOpacity style={styles.userButton} onPress={() => this.props.navigation.navigate('Student')}>
            <Image
              style={styles.arrowRightImage} 
              source={require('../../img/arrow_right.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 0.12,
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#00AB64',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    paddingLeft: 10,
    borderLeftWidth: 1,
  },
  userAvatar: {
    height: 50,
    width: 50,
  },
  userButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowRightImage: {
    width: 30,
    height: 30,
  },
  studentName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textWhite: {
    color: '#FFFFFF',
  }
});