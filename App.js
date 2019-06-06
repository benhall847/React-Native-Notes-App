import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, ThemeProvider, ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableScale from 'react-native-touchable-scale';
import NotesList from './screens/NotesList';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import NoteDetails from './screens/NoteDetails';

class App extends React.Component{

  
  render() {
  return (
      <AppNavigator/>
  )
  }

}

const AppNavigator = createStackNavigator({
  Notes:{
    screen:NotesList,
    navigationOptions:({navigation})=>({
      header:null
    })

  },
  NoteDetails:NoteDetails,
  

})

export default createAppContainer(AppNavigator)



