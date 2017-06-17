import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  TextInput,
  // ToastAndroid,
  ListView,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Note from './Note';                              // Custom component note.js

class MainScreen extends React.Component {              // Main screen
  // static navigationOptions = {title: 'Main screen'};    // Navigation
  constructor(props) { super(props);                    // Constructor
    this.state = {                                      // State
      noteArray        :[                               // Note data structure
        {
        'date' : '2017',
        'note' : 'Simple note',
        },
      ],
      noteText: '',
    }

    var lastNote = 'init222'

    AsyncStorage.getItem('noteArrayStorage')
      .then((value) => {
        if(value != ''){
          this.setState( { noteArray : JSON.parse(value) } )
          // console.warn('3: ' + value);
        }
      })
      .done();

  }
// end Constructor
  render() {                                        // Rendering view
	  const { navigate } = this.props.navigation;

    let arr = this.state.noteArray
    let notes = []
    for (let i in arr) {
      notes[i] = <Note
                    key={i}
                    keyval={i}
                    note={arr[i].note}
                    date={arr[i].date}
                    deleteMethod={ ()=>this.deleteNote(i) } />
    }
    return (
      <View style={st.container}>

        <View style={st.h1}>
          <Text style={st.hText}>-=NOTER=-</Text>
        </View>
        <ScrollView style={st.scrContainer}>{notes}</ScrollView>
        <View style={st.footer}>

          <TouchableOpacity style={st.addButton}
            onPress={this.addNote.bind(this)}>
            <Text style={st.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput  style={st.TextInput}
                      placeholder='Input Note here'
                      placeholderTextColor='white'
                      underlineColorAndroid='transparent'
                      onChangeText={(noteText) => { this.setState({noteText}) }}
                      value={this.state.noteText}
                      onSubmitEditing={(event)=>{this.addNote()}}
                      >
          </TextInput>
        </View>
      </View>
    );
  }

  addNote() {                                // Function - Event on Tap
    if(this.state.noteText){
      let d = new Date
      this.state.noteArray.push(
        {
          'date': this.dateFormat(),
          'note': this.state.noteText }
      )
      AsyncStorage.setItem('noteArrayStorage',
        JSON.stringify(this.state.noteArray) )

      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText: ''})
      // this.refs.SecondInput.focus();
    }
  }
  deleteNote(key){
    this.state.noteArray.splice(key, 1)
    AsyncStorage.setItem('noteArrayStorage',
      JSON.stringify(this.state.noteArray) )
    this.setState({noteArray: this.state.noteArray})
  }

  dateFormat() {
    var date = new Date()
    var y = date.getFullYear(date),
        m =   this.add0( date.getMonth(    date) ),
        d =   this.add0( date.getDate(     date) ),
        h =   this.add0( date.getHours(    date) ),
        mm =  this.add0( date.getMinutes(  date) )

    return d +'/'+ m +'/'+ y +' at '+h+':'+mm
  }
  add0 (n){
    var r;
    if( n^0 === n ){
      if (10>n && n>=0) r = '0'+n;
      else r = n
    }
    else r = ''
    return r+''
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
    backgroundColor: '#4B67A0',
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
    marginBottom: 90,
  },
  footer:{
    position: 'absolute',
    left:0,
    right:0,
    bottom:10,
    alignItems: 'center',
    height:70
  },
  addButton:{
    width : 50,
    height: 65,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FF5A5F',
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    right:10,
    top:5,
  },
  addButtonText:{
    color : '#ffffff',
    fontSize: 36,
  },
  TextInput:{
    alignSelf : 'stretch',
    color: '#fff',
    backgroundColor: '#252525',
    padding: 20,
    paddingBottom: 17,
    marginLeft:10,
    marginTop:5,
    borderTopWidth: 2,
    borderTopColor: '#ededed',
    width: 275,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

const ReactBlogClient = StackNavigator({
  Main: { screen: MainScreen },
  // Main: { screen: MainScreen },
  // Articles: { screen: ArticlesScreen },
  // Article: { screen: ArticleScreen },
});

AppRegistry.registerComponent('ReactBlogClient', () => ReactBlogClient);
