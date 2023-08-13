import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from "./styles/colors"
import { PanGestureHandler } from 'react-native-gesture-handler';

function Game():JSX.Element {
 const handleGesture = (event:any) => {
    console.log(event);
 };
 
 
    return (

    <PanGestureHandler onGestureEvent={handleGesture}>
        <SafeAreaView  style={style.container}></SafeAreaView>

    </PanGestureHandler>
    
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