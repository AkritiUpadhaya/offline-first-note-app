import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

export default function index() {
  return (
    <SafeAreaView style={{flex:1}}>
    <View>
        <View style={styles.container}>
            <Text style={styles.card}>
                Add new note
            </Text>

            <TextInput placeholder='Enter note title' style={styles.input}/>
            <TextInput placeholder='Enter note description' style={styles.input}/>
        </View>
      <Button title='Add new note' onPress={()=>{router.push('/note')}}/>
      <Button title='Cancel' onPress={()=>{}}/>
    </View>
    </SafeAreaView>
  )
}


const styles= StyleSheet.create({
    container:{
        width:'90%',
        height:200,
        backgroundColor:'white',
        shadowColor:'rgba(0,0,0,0.5)',
        shadowOpacity: 5,
    alignSelf:'center',
    padding:10,
    },

    card:{
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:10
    },

    input:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10,
        paddingHorizontal:10,
        marginTop:10
        
    }
})
