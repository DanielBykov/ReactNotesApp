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
import Note from './note';

// Main screen
class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Main screen',
  };

  constructor(props) {
    super(props);


    var arr1 = ['John', 'Joel', '22222222', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(arr1)
    };
  }

  _onPressButton() {
    alert("You tapped the button!");
  }

  state = {
    noteArray: [ { 'dddd' : 'sssssss' } ],
    noteTxt: '',
  }

  // Rendering view
  render() {
	  const { navigate } = this.props.navigation;


    const stateD = {
      noteArray: [ { 'dddd' : 'sssssss' } ]
    }

    Map
    let notes = stateD.noteArray.map( (val, key) => {
      return <Note key={key} val={val} /> // Note
    });

    return (
      <View style={st.container}>
        <View style={st.h1}>
          <Text style={st.hText}>w3e4tewrtrf</Text>
        </View>

        <ScrollView>{notes}</ScrollView>

        <View style={st.h1}>

        </View>


        <Text style={st.bg1}>Just Text</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) =>
              // var key = "ff";
              <TouchableHighlight onPress={this._onPressButton}>
                <Text>{rowData}</Text>
              </TouchableHighlight>
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
