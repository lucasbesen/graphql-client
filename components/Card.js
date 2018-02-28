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
          source={require('../img/user.png')}
        />
        <View style={styles.info}>
          <View>
            <Text>Aqui o título</Text>
            <Text>Aqui a descrição</Text>
          </View>
          <TouchableOpacity style={styles.userButton}>
            <Image
              style={styles.arrowRightImage} 
              source={require('../img/arrow_right.png')}
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
    backgroundColor: '#02F02F',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F2F2'
  },
  arrowRightImage: {
    width: 30,
    height: 30,
  }
});