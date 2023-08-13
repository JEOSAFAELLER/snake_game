import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from "./styles/colors"
import { PanGestureHandler } from 'react-native-gesture-handler';
import { GestureEventType } from './types/types';

const SNAKE_INITIAL_POSITION = [{ x: 5, y:5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { minX: 0, maxX: 35, minY: 0, maxY: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;




function Game():JSX.Element {

    
 const handleGesture = (event:GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
    console.log(translationX, translationY);
 
    if(Math.abs(translationX) > Math.abs(translationY)) {
        if(translationX > 0) {
            //moving right
            console.log('Right Swipe');
        }else{
            //moving left
            console.log('Left Swipe');
        }

    }else{
        if(translationY > 0) {
            //down
            console.log('Down Swipe');
        }else{
            //up
            console.log('Up Swipe');
        }
    }

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