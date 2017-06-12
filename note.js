import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class todoapp {
  render(){
    return(
      <View>
        <Text>{this.props.val.date}</Text>
        <Text>{this.props.val.note}</Text>
        <TouchableOpacity onPress={this.props.deleteMethod}>
          <Text>=D=</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
