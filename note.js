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
      <View style={st.note} keyG={this.props.keyval}>
        <Text style={st.noteTxt}>
          <Text style={st.noteTxtTitle}>Date:_</Text>
           {this.props.date}
        </Text>
        <Text style={st.noteTxt}>
          <Text style={st.noteTxtTitle}>Name:_</Text>
           {this.props.name}
        </Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={st.noteDel}>
          <Text style={st.noteDelTxt}>=D=</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const st = StyleSheet.create({
  note:{
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteTxt:{
    borderLeftWidth:10,
    borderLeftColor:'#e91e63',
    paddingLeft:20
  },
  noteDel:{
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#298069',
    padding: 10,
    top:10,bottom:10,right:10,
    borderRadius: 10
  },
  noteDelTxt:{

  },
  noteTxtTitle:{
    fontWeight:'bold',
    backgroundColor: '#aaa',
    marginRight: 5
  }
})
