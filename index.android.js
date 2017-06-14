import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  ToastAndroid,
  ListView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

// Template note.js
import Note from './Note';

// Main screen
class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main screen',
  };
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      arr2        : arr2,
      dataSource  : ds.cloneWithRows(arr1),
      noteArray   : [
        'noteArray1' : 'noteArray11',
      ],
      noteTxt     : 'noteTxt-noteTxt',
      arr3        :[
        {
        'date' : '03/05/2017',
        'name' : 'Note1',
        },
        {
        'date' : '02/05/2017',
        'name' : 'Note2',
        },
      ]
    };
  }
  // Tap event
  _onPressButton() {
    alert("You tapped the button!");
  }

  // Rendering view
  render() {
	  const { navigate } = this.props.navigation;

    // Map
    // let notes = this.state.noteArray.map( (val, keyg) => {
    //   // console.warn(keyg+' : '+val);
    //   return <Note key={keyg} val={val} /> // Note
    // });

    // console.warn('arr3'+this.state.arr3)
    let arr33 = this.state.arr3
    let notes = []
    for (var i in arr33) {
      // console.warn(arr33[i].date+' : '+arr33[i].name);
      notes[i] = <Note key={i} name={arr33[i].name} date={arr33[i].date} />
    }



    return (
      <View style={st.container}>

        <View style={st.h1}>
          <Text style={st.hText}>-=NOTER=-</Text>
        </View>

        <ScrollView style={st.scrContainer}>{notes}</ScrollView>

        <View style={st.footer}>
          <TouchableOpacity style={st.addButton}>
            <Text style={st.addButtonText}>Add new Note</Text>
          </TouchableOpacity>

          <TextInput  style={st.TextInput}
                      placeholder='Input Note here'
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'
                      >
          </TextInput>
        </View>

        {/* <Text style={st.bg1}>List:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) =>
              // var key = "ff";
            <View>
              <Text>9999</Text>
              <TouchableHighlight onPress={this._onPressButton}>
                <Text>{rowData}</Text>
              </TouchableHighlight>
            </View>
          }
        /> */}
      </View>
    );
  }
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  h1:{
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  hText:{
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrContainer:{
    flex: 1,
    marginBottom: 100
  },
  footer:{
    position: 'absolute',
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center'
  },
  addButton:{
    width : 140,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -10,
    marginRight: -160
  },
  addButtonText:{
    color : '#ffffff',
    fontSize: 16,
  },
  TextInput:{
    alignSelf : 'stretch',
    color: '#fff',
    backgroundColor: '#252525',
    padding: 20,
    paddingTop: 40,
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
});

const ReactBlogClient = StackNavigator({
  Main: { screen: MainScreen },
  // Main: { screen: MainScreen },
  // Articles: { screen: ArticlesScreen },
  // Article: { screen: ArticleScreen },
});

AppRegistry.registerComponent('ReactBlogClient', () => ReactBlogClient);
