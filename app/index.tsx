import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import database, { notesCollection } from '@/src/db'

export default function index() {
    const [title,setTitle]= useState('')
    const [description,setDescription]= useState('')

    const addNote=async()=>{
        console.warn('addnote', title, description)
        await database.write(async()=>{
            await notesCollection.create((noteoption)=>{
                noteoption.note=title
                noteoption.description=description
            })
        })
    }
    const updateNote=()=>{}
    const deleteNote=()=>{}
    
  return (
    <SafeAreaView style={{flex:1}}>
    <View>
        <View style={styles.container}>
            <Text style={styles.card}>
                Add new note
            </Text>

            <TextInput placeholder='Enter note title' value={title} onChangeText={setTitle} style={styles.input}/>
            <TextInput placeholder='Enter note description' value={description} onChangeText={setDescription} style={styles.input}/>
        </View>
      <Button title='Add new note' onPress={()=>{addNote()}}/>
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
