import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default class note extends React.Component {
  render(){
    return(
      <View keyV={this.props.keyval}>
        <Text>{this.props.keyg}</Text>
        <Text>{this.props.val}</Text>
        <TouchableOpacity onPress={this.props.deleteMethod}>
          <Text>=D=</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
