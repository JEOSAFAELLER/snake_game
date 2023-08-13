import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from "./styles/colors"

function Game():JSX.Element {
  return (
    <SafeAreaView
    style={style.container}>
        


    </SafeAreaView>
  )
}

export default Game

const style = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    }
})