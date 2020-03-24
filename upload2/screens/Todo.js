import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput , Button,TouchableWithoutFeedback,Keyboard} from 'react-native';
import auth from '../firebase/ApiKeys'


export default function Todo({navigation}) {

  console.log(navigation.getParam('mail'))
  console.log(auth.currentUser.email)
    const signOutHandler = () => {
      auth.signOut().then(
        navigation.navigate('SignIn')
      )
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <View style={styles.container}>
                <Text style={styles.Header}>Welcome {auth.currentUser.email}</Text>
                <View style={styles.up}></View>
                <View style={styles.marggin}>
                  <Button title="SignOut" onPress={()=>{signOutHandler()}}></Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:5
      },
      Header:{
          textAlign:'left',
          fontSize:30,
          fontWeight:'800',
          margin:5
      },
      marggin:{
          width:340,
          margin:5,
      },
      up:{
        marginTop:550
      }
    });
    