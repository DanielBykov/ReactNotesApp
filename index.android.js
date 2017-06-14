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
  ScrollView,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

// Template note.js
import Note from './note';

// Main screen
class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main screen',
  };
  constructor(props) {
    super(props);

    var arr1 = ['11','22']
    var arr2 = new Map();
    arr2.set(
      {
      'date' : '03/05/2017',
      'name' : 'Note1',
      },
      {
      'date' : '02/05/2017',
      'name' : 'Note2',
      },
    )
    // [
    //     {name: Garry, surname: Potter},
    //     {name: Garry2, surname: Potter2}
    // ]
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      arr2        : arr2,
      dataSource  : ds.cloneWithRows(arr1),
      noteArray   : [
        'noteArray1' : 'noteArray11',
      ],
      noteTxt     : 'noteTxt-noteTxt',
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
    let notes = this.state.noteArray.map( (val, keyg) => {
      // console.warn(keyg+' : '+val);
      return <Note key={keyg} val={val} /> // Note
    });

    let notes2 = this.state.arr2.forEach( (it,i,arr2)=>{

      console.warn(i.date+' : '+i.name);
    } )

    // console.warn(this.state.noteArray)

    return (
      <View style={st.container}>
        <View style={st.h1}>
          <Text style={st.hText}>Text-1</Text>
        </View>
        <ScrollView>{notes}</ScrollView>
        <View style={st.h1}>
        </View>

        {/* <View style={st.container}>
          <Text style={st.bg1}>Test3:</Text>
          <Note keyg='k1' val='v2' />
        </View> */}

        <Text style={st.bg1}>List:</Text>
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
        />
      </View>
    );
  }
}

const st = StyleSheet.create({
  listviewitemabout: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  }
});

const ReactBlogClient = StackNavigator({
  Main: { screen: MainScreen },
  // Main: { screen: MainScreen },
  // Articles: { screen: ArticlesScreen },
  // Article: { screen: ArticleScreen },
});

AppRegistry.registerComponent('ReactBlogClient', () => ReactBlogClient);
