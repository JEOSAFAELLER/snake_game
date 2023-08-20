import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from "./styles/colors"
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Coordinate, Direction, GestureEventType } from './types/types';
import Snake from './Snake';

import Food from './Food';
import { checkGameOver } from './utils/CheckGameOver';
import { checkEatsfood } from './utils/checksEatsFood';

const SNAKE_INITIAL_POSITION = [{ x: 5, y:5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { minX: 0, maxX: 30, minY: 0, maxY: 60 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;




function Game():JSX.Element {

    const [direction, setDirection] = React.useState<Direction>(Direction.Right);  
    const [snake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
    const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
    const[isPaused, setIsPaused] = React.useState<boolean>(false);

    React.useEffect(() => {
        if(!isGameOver) {
           
          const intervalId = setInterval(() => {!isPaused &&  moveSnake()}, MOVE_INTERVAL)
            
            return () => clearInterval(intervalId);
        }
    } , [snake, isGameOver, isPaused]);

    const moveSnake = () => {
        const snakeHead = snake[0];
        const newHead = { ...snakeHead}//creating a copy

        //#game over
        if(checkGameOver(snakeHead, GAME_BOUNDS)){
            setIsGameOver((prev) => !prev);
            return;
        }

        switch (direction){
            case Direction.Up:
                newHead.y -= 1;
                break;
            case Direction.Down:
                newHead.y += 1;
                break;
            case Direction.Left:
                newHead.x -= 1;
                break;
            case Direction.Right:
                newHead.x += 1;
                break;
            default:
                break;

        }
        //#if eats food then grow 
        if (checkEatsfood(newHead, food, 2)) {
            setSnake([newHead, ...snake.slice(0,-1)])

        }
            setSnake([newHead, ...snake.slice(0,-1)]);
    }    

 const handleGesture = (event:GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
    console.log(translationX, translationY);
 
    if(Math.abs(translationX) > Math.abs(translationY)) {
        if(translationX > 0) {
            //moving right
            setDirection(Direction.Right);
        }else{
            //moving left
            setDirection(Direction.Left);
        }

    }else{
        if(translationY > 0) {
            //down
            setDirection(Direction.Down);
        }else{
            //up
            setDirection(Direction.Up);
        }
    }

};

 
 
    return (

    <PanGestureHandler onGestureEvent={handleGesture}>
        <SafeAreaView  style={style.container}>
            <View style={style.boundaries}>
                <Snake snake={snake}/>
                <Food x={food.x} y={food.y}/>
            </View>
        </SafeAreaView>

    </PanGestureHandler>
    
  )
}

export default Game

const style = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:Colors.primary,
       
    },
    boundaries:{
        flex:1,
        borderColor: Colors.primary,
        borderWidth: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.background,

    }
})