import React from 'react'
import {View, Text, TextInput, KeyboardAvoidingView, Button} from 'react-native';


export default class NoteDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:props.navigation.state.params.theNote.note
        }
    }

    _saveNote = ()=>{
        const {saveNote, index} = this.props.navigation.state.params
        saveNote(this.state.text, index)
      }


    render() {
        return (
            <KeyboardAvoidingView
            behavior="height" 
            enabled
            style={{flex:1}}
            keyboardVerticalOffset={80}
            >
            <View style={{flex:1}}>
                <TextInput     
                    style={{flex:1, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text)=>{this.setState({text})}}
                    value={this.state.text}
                    multiline={true}
                    />
                <Button 
                title="SAVE IT"
                onPress={()=>{
                      this._saveNote()
                  }}
                  />
            </View>
                    </KeyboardAvoidingView>
        )
        
    }
    }



