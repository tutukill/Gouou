import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class Eidt extends Component{
  render(){
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>制作页面</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'black',
    margin: 50,
  },
})

module.exports = Eidt