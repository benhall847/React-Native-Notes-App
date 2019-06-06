import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, ThemeProvider, ListItem, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableScale from 'react-native-touchable-scale';

export default class NotesList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          notes:[
            {
              title:"DONT READ THIS LIST",
              note:"Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform powers enterprise-class. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. It is pushing the envelope At the end of the customer journey. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the customer journey. Steps taken and calories burnt and send data to a pro version for £7 a month with 15 personalised hub topic and 10 scoops a day. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform powers enterprise-class. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform powers enterprise-class. These innovations help CMOs challenged with the delivery of omnichannel digital experiences for some of the FirstSpriti Digital Experience Platform"
            },
            {
              title:"I LIKE BANANAS",
              note:"Spriti introduced new capabilities to the awards page of the customer journey. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform powers enterprise-class. But you can upgrade to a pro version for £7 a month with 15 personalised hub topic and 10 scoops a day. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the awards page of the FirstSpriti Digital Experience Platform powers enterprise-class. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform. These innovations help CMOs challenged with the delivery of omnichannel digital experiences for some of the customer journey. It is pushing the envelope At the end of the FirstSpriti Digital Experience Platform powers enterprise-class"
            }
          ],
          icon: <Icon name="sticky-note" size={40}/>
        }
        
      }
    _openNote = (theNote, i)=>{
        this.props.navigation.navigate('NoteDetails', {theNote, saveNote:this._saveNote, index:i})
      }
    _saveNote = (note, index)=>{
        let newArray = [...this.state.notes]
        newArray[index].note = note
        this.setState({notes:newArray})
        
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Header
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'Notes', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'home', color: '#fff' }}
                />
                {this.state.notes.map((eaNote, i) => (
                <ListItem
                  Component={TouchableScale}
                  key={i}
                  title={eaNote.title}
                  leftIcon={this.state.icon}
                  linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                  }}
                  chevron
                  onPress={()=>{
                      this._openNote(eaNote, i)
                  }}
                />
              ))}
            </View>
        )
    }
}
